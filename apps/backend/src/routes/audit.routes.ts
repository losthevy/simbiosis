import { Router } from "express";
import { reportService } from "../services/report.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";
import { asyncHandler, ApiError } from "../middleware/error.middleware";

const router = Router();

// ===== AUDITS =====

// GET /api/audits - List all audits
router.get("/", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const audits = await reportService.getAllAudits();
    res.json({ data: audits });
}));

// GET /api/audits/:id - Get audit by ID
router.get("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const audit = await reportService.getAuditById(req.params.id);
    if (!audit) {
        throw new ApiError(404, "Audit tidak ditemukan");
    }
    res.json({ data: audit });
}));

// POST /api/audits - Create new audit
router.post("/", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const { title, findings, status } = req.body;

    if (!title) {
        throw new ApiError(400, "Nama audit wajib diisi");
    }

    const audit = await reportService.createAudit({
        auditorId: req.user!.id,
        title,
        findings,
        status: status || "draft",
    });
    res.status(201).json({ data: audit });
}));

// PATCH /api/audits/:id - Update audit
router.patch("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const updated = await reportService.updateAudit(req.params.id, req.body);
    if (!updated) {
        throw new ApiError(404, "Audit tidak ditemukan");
    }
    res.json({ data: updated });
}));

export default router;
