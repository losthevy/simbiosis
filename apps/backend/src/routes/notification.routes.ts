import { Router } from "express";
import { notificationService } from "../services/notification.service";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// GET /api/notifications - Get user's notifications
router.get("/", authMiddleware, async (req, res) => {
    try {
        const notifications = await notificationService.getByUser(req.user!.id);
        res.json({ data: notifications });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch notifications" });
    }
});

// PATCH /api/notifications/:id/read - Mark as read
router.patch("/:id/read", authMiddleware, async (req, res) => {
    try {
        const notification = await notificationService.markAsRead(req.params.id);
        res.json({ data: notification });
    } catch (error) {
        res.status(500).json({ error: "Failed to mark as read" });
    }
});

// DELETE /api/notifications/:id - Delete notification
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        await notificationService.delete(req.params.id);
        res.json({ message: "Notification deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete notification" });
    }
});

export default router;
