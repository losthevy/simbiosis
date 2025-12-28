import { db } from "../config/database";
import { users, userEcoPoints, ecoPointTransactions, friendships } from "../db/schema/users";
import { eq, desc, and, or } from "drizzle-orm";

export const userService = {
    async getById(id: string) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
    },

    async getByEmail(email: string) {
        const [user] = await db.select().from(users).where(eq(users.email, email));
        return user;
    },

    async updateProfile(id: string, data: { name?: string; image?: string }) {
        const [updated] = await db.update(users)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(users.id, id))
            .returning();
        return updated;
    },

    async getEcoPoints(userId: string) {
        const [points] = await db.select().from(userEcoPoints).where(eq(userEcoPoints.userId, userId));
        if (!points) {
            // Create initial eco points record
            const [newPoints] = await db.insert(userEcoPoints).values({ userId }).returning();
            return newPoints;
        }
        return points;
    },

    async getPointsHistory(userId: string, limit = 50) {
        return db.select()
            .from(ecoPointTransactions)
            .where(eq(ecoPointTransactions.userId, userId))
            .orderBy(desc(ecoPointTransactions.createdAt))
            .limit(limit);
    },

    async updateEcoPoints(userId: string, amount: number, type: "deposit" | "redemption" | "challenge_reward" | "referral" | "adjustment", description?: string, referenceId?: string) {
        // Get current balance
        let points = await this.getEcoPoints(userId);
        const newBalance = points.balance + amount;

        // Update balance
        await db.update(userEcoPoints)
            .set({ balance: newBalance, updatedAt: new Date() })
            .where(eq(userEcoPoints.userId, userId));

        // Record transaction
        const [transaction] = await db.insert(ecoPointTransactions).values({
            userId,
            amount,
            type,
            description,
            referenceId,
        }).returning();

        return transaction;
    },

    async getFriends(userId: string) {
        return db.select({
            friendship: friendships,
            friend: users,
        })
            .from(friendships)
            .innerJoin(users, eq(friendships.friendId, users.id))
            .where(and(
                eq(friendships.userId, userId),
                eq(friendships.status, "accepted")
            ));
    },

    async sendFriendRequest(userId: string, friendId: string) {
        const [friendship] = await db.insert(friendships).values({
            userId,
            friendId,
            status: "pending",
        }).returning();
        return friendship;
    },

    async acceptFriendRequest(friendshipId: string) {
        const [updated] = await db.update(friendships)
            .set({ status: "accepted" })
            .where(eq(friendships.id, friendshipId))
            .returning();
        return updated;
    },
};
