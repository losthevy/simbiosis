import { Router } from "express";
import { userService } from "../services/user.service";
import { authMiddleware } from "../middleware/auth.middleware";
import { validate, asyncHandler, ApiError } from "../middleware/error.middleware";
import { updateProfileSchema, friendRequestSchema } from "../validators/schemas";

const router = Router();

// GET /api/users/me - Get current user profile
router.get("/me", authMiddleware, asyncHandler(async (req, res) => {
    const user = await userService.getById(req.user!.id);
    if (!user) {
        throw new ApiError(404, "User tidak ditemukan");
    }
    res.json({ data: user });
}));

// PATCH /api/users/me - Update current user profile
router.patch("/me", authMiddleware, validate(updateProfileSchema), asyncHandler(async (req, res) => {
    const { name, image } = req.body;
    const updated = await userService.updateProfile(req.user!.id, { name, image });
    res.json({ data: updated });
}));

// GET /api/users/me/points - Get user's EcoPoints
router.get("/me/points", authMiddleware, asyncHandler(async (req, res) => {
    const points = await userService.getEcoPoints(req.user!.id);
    res.json({ data: points });
}));

// GET /api/users/me/points/history - Get points transaction history
router.get("/me/points/history", authMiddleware, asyncHandler(async (req, res) => {
    const history = await userService.getPointsHistory(req.user!.id);
    res.json({ data: history });
}));

// GET /api/users/me/friends - Get user's friends
router.get("/me/friends", authMiddleware, asyncHandler(async (req, res) => {
    const friends = await userService.getFriends(req.user!.id);
    res.json({ data: friends });
}));

// POST /api/users/friends/request - Send friend request
router.post("/friends/request", authMiddleware, validate(friendRequestSchema), asyncHandler(async (req, res) => {
    const { friendId } = req.body;

    if (friendId === req.user!.id) {
        throw new ApiError(400, "Tidak bisa menambahkan diri sendiri sebagai teman");
    }

    const friend = await userService.getById(friendId);
    if (!friend) {
        throw new ApiError(404, "User tidak ditemukan");
    }

    const friendship = await userService.sendFriendRequest(req.user!.id, friendId);
    res.status(201).json({ data: friendship });
}));

// GET /api/users/:id - Get user by ID
router.get("/:id", asyncHandler(async (req, res) => {
    const user = await userService.getById(req.params.id);
    if (!user) {
        throw new ApiError(404, "User tidak ditemukan");
    }
    res.json({ data: { id: user.id, name: user.name, image: user.image } });
}));

export default router;
