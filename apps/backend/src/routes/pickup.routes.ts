import { Router } from "express";
import { pickupService } from "../services/pickup.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";

const router = Router();

// GET /api/pickups/my - Get worker's assigned pickups
router.get("/my", authMiddleware, roleMiddleware("worker", "admin"), async (req, res) => {
    try {
        const pickups = await pickupService.getWorkerPickups(req.user!.id);
        res.json({ data: pickups });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pickups" });
    }
});

// GET /api/pickups/:id - Get pickup details
router.get("/:id", authMiddleware, roleMiddleware("worker", "admin"), async (req, res) => {
    try {
        const pickup = await pickupService.getById(req.params.id);
        if (!pickup) {
            return res.status(404).json({ error: "Pickup not found" });
        }
        res.json({ data: pickup });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pickup" });
    }
});

// POST /api/pickups/:id/start - Start pickup
router.post("/:id/start", authMiddleware, roleMiddleware("worker", "admin"), async (req, res) => {
    try {
        const updated = await pickupService.startPickup(req.params.id);
        res.json({ data: updated });
    } catch (error) {
        res.status(500).json({ error: "Failed to start pickup" });
    }
});

// POST /api/pickups/:id/complete - Complete pickup
router.post("/:id/complete", authMiddleware, roleMiddleware("worker", "admin"), async (req, res) => {
    try {
        const { wasteCollected } = req.body;
        const updated = await pickupService.completePickup(req.params.id, wasteCollected);
        res.json({ data: updated });
    } catch (error) {
        res.status(500).json({ error: "Failed to complete pickup" });
    }
});

export default router;
