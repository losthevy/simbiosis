import { z } from "zod";

// User validation schemas
export const updateProfileSchema = z.object({
    name: z.string().min(2, "Nama minimal 2 karakter").max(100).optional(),
    image: z.string().url("URL gambar tidak valid").optional(),
});

// Challenge validation schemas
export const createChallengeSchema = z.object({
    title: z.string().min(5, "Judul minimal 5 karakter").max(200),
    description: z.string().min(20, "Deskripsi minimal 20 karakter"),
    category: z.enum(["environment", "recycling", "community", "plastic_free"]),
    rewardPoints: z.number().int().min(1, "Poin minimal 1").max(10000),
    startDate: z.string().datetime().or(z.date()),
    endDate: z.string().datetime().or(z.date()),
    location: z.string().max(200).optional(),
    targetParticipants: z.number().int().min(1).optional(),
    imageUrl: z.string().url().optional(),
});

export const updateProgressSchema = z.object({
    progress: z.number().int().min(0).max(100, "Progress maksimal 100%"),
});

// Bank Sampah validation schemas
export const createDepositSchema = z.object({
    locationId: z.string().uuid("Location ID tidak valid"),
    wasteType: z.enum(["plastic", "paper", "metal", "glass", "organic", "electronic"]),
    weightKg: z.string().regex(/^\d+(\.\d{1,2})?$/, "Format berat tidak valid (contoh: 2.5)"),
    pointsEarned: z.number().int().min(0),
});

export const createScheduleSchema = z.object({
    locationId: z.string().uuid("Location ID tidak valid"),
    scheduledDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal: YYYY-MM-DD"),
    timeSlot: z.string().min(1, "Time slot wajib diisi"),
});

// Reward validation schemas
export const createRewardSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter").max(100),
    description: z.string().max(500).optional(),
    imageUrl: z.string().url().optional(),
    category: z.enum(["voucher", "product", "donation"]),
    pointsCost: z.number().int().min(1, "Biaya poin minimal 1"),
    stock: z.number().int().min(0).optional(),
});

// Collection validation schemas
export const createCollectionSchema = z.object({
    collectionCode: z.string().min(3, "Kode koleksi minimal 3 karakter").max(50),
    location: z.string().min(5, "Lokasi minimal 5 karakter").max(200),
    brand: z.string().max(100).optional(),
    wasteType: z.string().min(2, "Jenis sampah wajib diisi"),
    weightKg: z.string().regex(/^\d+(\.\d{1,2})?$/, "Format berat tidak valid"),
});

// Pickup validation schemas
export const completePickupSchema = z.object({
    wasteCollected: z.string().regex(/^\d+(\.\d{1,2})?$/, "Format berat tidak valid"),
});

// Friend request validation
export const friendRequestSchema = z.object({
    friendId: z.string().uuid("Friend ID tidak valid"),
});

// Pagination query schema
export const paginationSchema = z.object({
    limit: z.string().regex(/^\d+$/).transform(Number).pipe(z.number().int().min(1).max(100)).optional(),
    offset: z.string().regex(/^\d+$/).transform(Number).pipe(z.number().int().min(0)).optional(),
});

// Export type helpers
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateChallengeInput = z.infer<typeof createChallengeSchema>;
export type UpdateProgressInput = z.infer<typeof updateProgressSchema>;
export type CreateDepositInput = z.infer<typeof createDepositSchema>;
export type CreateScheduleInput = z.infer<typeof createScheduleSchema>;
export type CreateRewardInput = z.infer<typeof createRewardSchema>;
export type CreateCollectionInput = z.infer<typeof createCollectionSchema>;
export type CompletePickupInput = z.infer<typeof completePickupSchema>;
