import { Router } from "express";
import { leaderboardService } from "../services/leaderboard.service";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// GET /api/leaderboard - Get global leaderboard
router.get("/", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit as string) || 50;
        const leaderboard = await leaderboardService.getGlobal(limit);
        res.json({ data: leaderboard });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
});

// GET /api/leaderboard/my-rank - Get user's rank
router.get("/my-rank", authMiddleware, async (req, res) => {
    try {
        const rank = await leaderboardService.getUserRank(req.user!.id);
        res.json({ data: { rank } });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch rank" });
    }
});

export default router;
