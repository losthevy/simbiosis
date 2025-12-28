import { db } from "../config/database";
import { rewards, rewardRedemptions } from "../db/schema/rewards";
import { eq, desc, and } from "drizzle-orm";

export const rewardService = {
    async getAll(category?: string) {
        if (category) {
            return db.select().from(rewards)
                .where(and(
                    eq(rewards.isActive, true),
                    eq(rewards.category, category as any)
                ))
                .orderBy(desc(rewards.createdAt));
        }
        return db.select().from(rewards)
            .where(eq(rewards.isActive, true))
            .orderBy(desc(rewards.createdAt));
    },

    async getById(id: string) {
        const [reward] = await db.select().from(rewards).where(eq(rewards.id, id));
        return reward;
    },

    async create(data: {
        name: string;
        description?: string;
        imageUrl?: string;
        category: "voucher" | "product" | "donation";
        pointsCost: number;
        stock?: number;
    }) {
        const [reward] = await db.insert(rewards).values(data).returning();
        return reward;
    },

    async redeem(userId: string, rewardId: string, pointsSpent: number) {
        const [redemption] = await db.insert(rewardRedemptions).values({
            userId,
            rewardId,
            pointsSpent,
        }).returning();

        // Decrease stock
        const [reward] = await db.select().from(rewards).where(eq(rewards.id, rewardId));
        if (reward && reward.stock && reward.stock > 0) {
            await db.update(rewards)
                .set({ stock: reward.stock - 1 })
                .where(eq(rewards.id, rewardId));
        }

        return redemption;
    },

    async getUserRedemptions(userId: string) {
        return db.select({
            redemption: rewardRedemptions,
            reward: rewards,
        })
            .from(rewardRedemptions)
            .innerJoin(rewards, eq(rewardRedemptions.rewardId, rewards.id))
            .where(eq(rewardRedemptions.userId, userId))
            .orderBy(desc(rewardRedemptions.redeemedAt));
    },
};
