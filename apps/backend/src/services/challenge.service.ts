import { db } from "../config/database";
import { challenges, challengeParticipations } from "../db/schema/challenges";
import { eq, and, desc } from "drizzle-orm";

export const challengeService = {
    async getAll(status?: string) {
        if (status) {
            return db.select().from(challenges)
                .where(eq(challenges.status, status as any))
                .orderBy(desc(challenges.createdAt));
        }
        return db.select().from(challenges).orderBy(desc(challenges.createdAt));
    },

    async getById(id: string) {
        const [challenge] = await db.select().from(challenges).where(eq(challenges.id, id));
        return challenge;
    },

    async create(data: {
        title: string;
        description: string;
        category: "environment" | "recycling" | "community" | "plastic_free";
        rewardPoints: number;
        startDate: Date;
        endDate: Date;
        location?: string;
        targetParticipants?: number;
        imageUrl?: string;
    }) {
        const [challenge] = await db.insert(challenges).values({
            ...data,
            status: "draft",
        }).returning();
        return challenge;
    },

    async update(id: string, data: Partial<typeof challenges.$inferInsert>) {
        const [updated] = await db.update(challenges)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(challenges.id, id))
            .returning();
        return updated;
    },

    async join(userId: string, challengeId: string) {
        // Check if already joined
        const existing = await db.select().from(challengeParticipations)
            .where(and(
                eq(challengeParticipations.userId, userId),
                eq(challengeParticipations.challengeId, challengeId)
            ));

        if (existing.length > 0) {
            throw new Error("Already joined this challenge");
        }

        const [participation] = await db.insert(challengeParticipations).values({
            userId,
            challengeId,
        }).returning();
        return participation;
    },

    async updateProgress(userId: string, challengeId: string, progress: number) {
        const [updated] = await db.update(challengeParticipations)
            .set({
                progressPercent: progress,
                status: progress >= 100 ? "completed" : "active",
                completedAt: progress >= 100 ? new Date() : undefined,
            })
            .where(and(
                eq(challengeParticipations.userId, userId),
                eq(challengeParticipations.challengeId, challengeId)
            ))
            .returning();
        return updated;
    },

    async getUserChallenges(userId: string, status?: string) {
        let query = db.select({
            participation: challengeParticipations,
            challenge: challenges,
        })
            .from(challengeParticipations)
            .innerJoin(challenges, eq(challengeParticipations.challengeId, challenges.id))
            .where(eq(challengeParticipations.userId, userId));

        return query;
    },

    async getParticipants(challengeId: string) {
        return db.select().from(challengeParticipations)
            .where(eq(challengeParticipations.challengeId, challengeId));
    },
};
