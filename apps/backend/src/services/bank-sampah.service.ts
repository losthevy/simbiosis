import { db } from "../config/database";
import { bankSampahLocations, wasteDeposits, depositSchedules } from "../db/schema/bank-sampah";
import { eq, desc } from "drizzle-orm";

export const bankSampahService = {
    async getLocations() {
        return db.select().from(bankSampahLocations).orderBy(desc(bankSampahLocations.createdAt));
    },

    async getLocationById(id: string) {
        const [location] = await db.select().from(bankSampahLocations).where(eq(bankSampahLocations.id, id));
        return location;
    },

    async createDeposit(data: {
        userId: string;
        locationId: string;
        wasteType: "plastic" | "paper" | "metal" | "glass" | "organic" | "electronic";
        weightKg: string;
        pointsEarned: number;
    }) {
        const [deposit] = await db.insert(wasteDeposits).values(data).returning();
        return deposit;
    },

    async getUserDeposits(userId: string) {
        return db.select({
            deposit: wasteDeposits,
            location: bankSampahLocations,
        })
            .from(wasteDeposits)
            .innerJoin(bankSampahLocations, eq(wasteDeposits.locationId, bankSampahLocations.id))
            .where(eq(wasteDeposits.userId, userId))
            .orderBy(desc(wasteDeposits.depositedAt));
    },

    async createSchedule(data: {
        userId: string;
        locationId: string;
        scheduledDate: string;
        timeSlot: string;
    }) {
        const [schedule] = await db.insert(depositSchedules).values(data).returning();
        return schedule;
    },

    async getUserSchedules(userId: string) {
        return db.select({
            schedule: depositSchedules,
            location: bankSampahLocations,
        })
            .from(depositSchedules)
            .innerJoin(bankSampahLocations, eq(depositSchedules.locationId, bankSampahLocations.id))
            .where(eq(depositSchedules.userId, userId))
            .orderBy(desc(depositSchedules.scheduledDate));
    },

    async cancelSchedule(scheduleId: string, userId: string) {
        const [updated] = await db.update(depositSchedules)
            .set({ status: "cancelled" })
            .where(eq(depositSchedules.id, scheduleId))
            .returning();
        return updated;
    },
};
