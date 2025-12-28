import { db } from "../config/database";
import { pickupTasks, wasteCollections } from "../db/schema/collections";
import { eq, desc, and } from "drizzle-orm";

export const pickupService = {
    async getWorkerPickups(workerId: string) {
        return db.select().from(pickupTasks)
            .where(eq(pickupTasks.workerId, workerId))
            .orderBy(desc(pickupTasks.scheduledAt));
    },

    async getById(id: string) {
        const [pickup] = await db.select().from(pickupTasks).where(eq(pickupTasks.id, id));
        return pickup;
    },

    async startPickup(pickupId: string) {
        const [updated] = await db.update(pickupTasks)
            .set({ status: "in_progress" })
            .where(eq(pickupTasks.id, pickupId))
            .returning();
        return updated;
    },

    async completePickup(pickupId: string, wasteCollected: string) {
        const [updated] = await db.update(pickupTasks)
            .set({
                status: "completed",
                wasteCollected,
                completedAt: new Date()
            })
            .where(eq(pickupTasks.id, pickupId))
            .returning();
        return updated;
    },

    async createCollection(data: {
        collectionCode: string;
        location: string;
        brand?: string;
        wasteType: string;
        weightKg: string;
        verifiedBy?: string;
    }) {
        const [collection] = await db.insert(wasteCollections).values(data).returning();
        return collection;
    },

    async verifyCollection(collectionId: string, verifiedBy: string) {
        const [updated] = await db.update(wasteCollections)
            .set({ status: "verified", verifiedBy })
            .where(eq(wasteCollections.id, collectionId))
            .returning();
        return updated;
    },

    async getCollections(status?: string) {
        if (status) {
            return db.select().from(wasteCollections)
                .where(eq(wasteCollections.status, status as any))
                .orderBy(desc(wasteCollections.collectedAt));
        }
        return db.select().from(wasteCollections).orderBy(desc(wasteCollections.collectedAt));
    },
};
