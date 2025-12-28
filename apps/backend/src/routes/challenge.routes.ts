import { Router } from "express";
import { challengeService } from "../services/challenge.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";
import { validate, asyncHandler, ApiError } from "../middleware/error.middleware";
import { createChallengeSchema, updateProgressSchema } from "../validators/schemas";

const router = Router();

// GET /api/challenges - List all challenges
router.get("/", asyncHandler(async (req, res) => {
    const { status } = req.query;
    const challenges = await challengeService.getAll(status as string);
    res.json({ data: challenges });
}));

// GET /api/challenges/my - Get user's challenges (must be before :id)
router.get("/my", authMiddleware, asyncHandler(async (req, res) => {
    const { status } = req.query;
    const challenges = await challengeService.getUserChallenges(req.user!.id, status as string);
    res.json({ data: challenges });
}));

// GET /api/challenges/:id - Get challenge details
router.get("/:id", asyncHandler(async (req, res) => {
    const challenge = await challengeService.getById(req.params.id);
    if (!challenge) {
        throw new ApiError(404, "Challenge tidak ditemukan");
    }
    const participants = await challengeService.getParticipants(req.params.id);
    res.json({ data: { ...challenge, participantCount: participants.length } });
}));

// POST /api/challenges/:id/join - Join a challenge
router.post("/:id/join", authMiddleware, asyncHandler(async (req, res) => {
    const challenge = await challengeService.getById(req.params.id);
    if (!challenge) {
        throw new ApiError(404, "Challenge tidak ditemukan");
    }
    const participation = await challengeService.join(req.user!.id, req.params.id);
    res.status(201).json({ data: participation });
}));

// PATCH /api/challenges/:id/progress - Update challenge progress
router.patch("/:id/progress", authMiddleware, validate(updateProgressSchema), asyncHandler(async (req, res) => {
    const { progress } = req.body;
    const updated = await challengeService.updateProgress(req.user!.id, req.params.id, progress);
    if (!updated) {
        throw new ApiError(404, "Partisipasi tidak ditemukan");
    }
    res.json({ data: updated });
}));

// POST /api/challenges - Create challenge (admin only)
router.post("/", authMiddleware, roleMiddleware("admin"), validate(createChallengeSchema), asyncHandler(async (req, res) => {
    const challenge = await challengeService.create(req.body);
    res.status(201).json({ data: challenge });
}));

// PATCH /api/challenges/:id - Update challenge (admin only)
router.patch("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const updated = await challengeService.update(req.params.id, req.body);
    res.json({ data: updated });
}));

export default router;
