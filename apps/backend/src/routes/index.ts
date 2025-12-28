import { Router } from "express";
import userRoutes from "./user.routes";
import challengeRoutes from "./challenge.routes";
import bankSampahRoutes from "./bank-sampah.routes";
import rewardRoutes from "./reward.routes";
import leaderboardRoutes from "./leaderboard.routes";
import notificationRoutes from "./notification.routes";
import pickupRoutes from "./pickup.routes";
import collectionRoutes from "./collection.routes";
import reportRoutes from "./report.routes";
import auditRoutes from "./audit.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/bank-sampah", bankSampahRoutes);
router.use("/rewards", rewardRoutes);
router.use("/leaderboard", leaderboardRoutes);
router.use("/notifications", notificationRoutes);
router.use("/pickups", pickupRoutes);
router.use("/collections", collectionRoutes);
router.use("/reports", reportRoutes);
router.use("/audits", auditRoutes);

export default router;
