import { db } from "../config/database";
import { notifications } from "../db/schema/notifications";
import { eq, desc, and } from "drizzle-orm";

export const notificationService = {
    async getByUser(userId: string) {
        return db.select().from(notifications)
            .where(eq(notifications.userId, userId))
            .orderBy(desc(notifications.createdAt));
    },

    async create(data: {
        userId: string;
        title: string;
        message: string;
        type: "challenge" | "points" | "friend_request" | "reward" | "system";
    }) {
        const [notification] = await db.insert(notifications).values(data).returning();
        return notification;
    },

    async markAsRead(notificationId: string) {
        const [updated] = await db.update(notifications)
            .set({ isRead: true })
            .where(eq(notifications.id, notificationId))
            .returning();
        return updated;
    },

    async delete(notificationId: string) {
        await db.delete(notifications).where(eq(notifications.id, notificationId));
    },
};
