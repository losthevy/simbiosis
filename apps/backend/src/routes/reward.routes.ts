import { Router } from "express";
import { rewardService } from "../services/reward.service";
import { userService } from "../services/user.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";
import { validate, asyncHandler, ApiError } from "../middleware/error.middleware";
import { createRewardSchema } from "../validators/schemas";

const router = Router();

// GET /api/rewards - List all rewards
router.get("/", asyncHandler(async (req, res) => {
    const { category } = req.query;
    const rewards = await rewardService.getAll(category as string);
    res.json({ data: rewards });
}));

// GET /api/rewards/redemptions/my - Get user's redemptions (before :id)
router.get("/redemptions/my", authMiddleware, asyncHandler(async (req, res) => {
    const redemptions = await rewardService.getUserRedemptions(req.user!.id);
    res.json({ data: redemptions });
}));

// GET /api/rewards/:id - Get reward details
router.get("/:id", asyncHandler(async (req, res) => {
    const reward = await rewardService.getById(req.params.id);
    if (!reward) {
        throw new ApiError(404, "Reward tidak ditemukan");
    }
    res.json({ data: reward });
}));

// POST /api/rewards/:id/redeem - Redeem a reward
router.post("/:id/redeem", authMiddleware, asyncHandler(async (req, res) => {
    const reward = await rewardService.getById(req.params.id);
    if (!reward) {
        throw new ApiError(404, "Reward tidak ditemukan");
    }

    if (!reward.isActive) {
        throw new ApiError(400, "Reward tidak tersedia");
    }

    if (reward.stock !== null && reward.stock <= 0) {
        throw new ApiError(400, "Stok reward habis");
    }

    // Check user has enough points
    const userPoints = await userService.getEcoPoints(req.user!.id);
    if (userPoints.balance < reward.pointsCost) {
        throw new ApiError(400, "Poin tidak cukup");
    }

    // Redeem
    const redemption = await rewardService.redeem(req.user!.id, req.params.id, reward.pointsCost);

    // Deduct points
    await userService.updateEcoPoints(
        req.user!.id,
        -reward.pointsCost,
        "redemption",
        `Tukar reward: ${reward.name}`,
        redemption.id
    );

    res.status(201).json({ data: redemption });
}));

// POST /api/rewards - Create reward (admin only)
router.post("/", authMiddleware, roleMiddleware("admin"), validate(createRewardSchema), asyncHandler(async (req, res) => {
    const reward = await rewardService.create(req.body);
    res.status(201).json({ data: reward });
}));

export default router;
