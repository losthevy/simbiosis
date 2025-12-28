import { Router } from "express";
import { pickupService } from "../services/pickup.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";

const router = Router();

// GET /api/collections - List all collections
router.get("/", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    try {
        const { status } = req.query;
        const collections = await pickupService.getCollections(status as string);
        res.json({ data: collections });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch collections" });
    }
});

// POST /api/collections - Create collection record
router.post("/", authMiddleware, roleMiddleware("worker", "admin"), async (req, res) => {
    try {
        const collection = await pickupService.createCollection(req.body);
        res.status(201).json({ data: collection });
    } catch (error) {
        res.status(500).json({ error: "Failed to create collection" });
    }
});

// POST /api/collections/:id/verify - Verify collection
router.post("/:id/verify", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    try {
        const collection = await pickupService.verifyCollection(req.params.id, req.user!.id);
        res.json({ data: collection });
    } catch (error) {
        res.status(500).json({ error: "Failed to verify collection" });
    }
});

export default router;
