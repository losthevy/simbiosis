import { Router } from "express";
import { bankSampahService } from "../services/bank-sampah.service";
import { userService } from "../services/user.service";
import { authMiddleware } from "../middleware/auth.middleware";
import { validate, asyncHandler, ApiError } from "../middleware/error.middleware";
import { createDepositSchema, createScheduleSchema } from "../validators/schemas";

const router = Router();

// GET /api/bank-sampah/locations - List all locations
router.get("/locations", asyncHandler(async (req, res) => {
    const locations = await bankSampahService.getLocations();
    res.json({ data: locations });
}));

// GET /api/bank-sampah/locations/:id - Get location details
router.get("/locations/:id", asyncHandler(async (req, res) => {
    const location = await bankSampahService.getLocationById(req.params.id);
    if (!location) {
        throw new ApiError(404, "Lokasi tidak ditemukan");
    }
    res.json({ data: location });
}));

// POST /api/bank-sampah/deposits - Record waste deposit
router.post("/deposits", authMiddleware, validate(createDepositSchema), asyncHandler(async (req, res) => {
    const { locationId, wasteType, weightKg, pointsEarned } = req.body;

    // Verify location exists
    const location = await bankSampahService.getLocationById(locationId);
    if (!location) {
        throw new ApiError(404, "Lokasi bank sampah tidak ditemukan");
    }

    const deposit = await bankSampahService.createDeposit({
        userId: req.user!.id,
        locationId,
        wasteType,
        weightKg,
        pointsEarned,
    });

    // Update user's EcoPoints
    await userService.updateEcoPoints(
        req.user!.id,
        pointsEarned,
        "deposit",
        `Setor sampah: ${weightKg}kg ${wasteType}`,
        deposit.id
    );

    res.status(201).json({ data: deposit });
}));

// GET /api/bank-sampah/deposits/my - Get user's deposits
router.get("/deposits/my", authMiddleware, asyncHandler(async (req, res) => {
    const deposits = await bankSampahService.getUserDeposits(req.user!.id);
    res.json({ data: deposits });
}));

// POST /api/bank-sampah/schedules - Create deposit schedule
router.post("/schedules", authMiddleware, validate(createScheduleSchema), asyncHandler(async (req, res) => {
    const { locationId, scheduledDate, timeSlot } = req.body;

    // Verify location exists
    const location = await bankSampahService.getLocationById(locationId);
    if (!location) {
        throw new ApiError(404, "Lokasi bank sampah tidak ditemukan");
    }

    const schedule = await bankSampahService.createSchedule({
        userId: req.user!.id,
        locationId,
        scheduledDate,
        timeSlot,
    });
    res.status(201).json({ data: schedule });
}));

// GET /api/bank-sampah/schedules/my - Get user's schedules
router.get("/schedules/my", authMiddleware, asyncHandler(async (req, res) => {
    const schedules = await bankSampahService.getUserSchedules(req.user!.id);
    res.json({ data: schedules });
}));

// DELETE /api/bank-sampah/schedules/:id - Cancel schedule
router.delete("/schedules/:id", authMiddleware, asyncHandler(async (req, res) => {
    await bankSampahService.cancelSchedule(req.params.id, req.user!.id);
    res.json({ message: "Jadwal dibatalkan" });
}));

export default router;
