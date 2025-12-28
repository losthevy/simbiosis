import { Router } from "express";
import { reportService } from "../services/report.service";
import { authMiddleware, roleMiddleware } from "../middleware/auth.middleware";
import { asyncHandler, ApiError } from "../middleware/error.middleware";

const router = Router();

// ===== REPORTS =====

// GET /api/reports - List all reports
router.get("/", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const reports = await reportService.getAllReports();
    res.json({ data: reports });
}));

// GET /api/reports/:id - Get report by ID
router.get("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const report = await reportService.getReportById(req.params.id);
    if (!report) {
        throw new ApiError(404, "Laporan tidak ditemukan");
    }
    res.json({ data: report });
}));

// POST /api/reports - Create new report
router.post("/", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const { title, reportType, data, status } = req.body;

    if (!title || !reportType) {
        throw new ApiError(400, "Judul dan tipe laporan wajib diisi");
    }

    const report = await reportService.createReport({
        createdBy: req.user!.id,
        title,
        reportType,
        data,
        status: status || "draft",
    });
    res.status(201).json({ data: report });
}));

// PATCH /api/reports/:id - Update report
router.patch("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    const updated = await reportService.updateReport(req.params.id, req.body);
    if (!updated) {
        throw new ApiError(404, "Laporan tidak ditemukan");
    }
    res.json({ data: updated });
}));

// DELETE /api/reports/:id - Delete report
router.delete("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(async (req, res) => {
    await reportService.deleteReport(req.params.id);
    res.json({ message: "Laporan berhasil dihapus" });
}));

export default router;
