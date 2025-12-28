import { db } from "../config/database";
import { users, userEcoPoints } from "../db/schema/users";
import { desc, sql } from "drizzle-orm";

export const leaderboardService = {
    async getGlobal(limit = 50) {
        return db.select({
            user: {
                id: users.id,
                name: users.name,
                image: users.image,
            },
            points: userEcoPoints.balance,
        })
            .from(userEcoPoints)
            .innerJoin(users, sql`${userEcoPoints.userId} = ${users.id}`)
            .orderBy(desc(userEcoPoints.balance))
            .limit(limit);
    },

    async getUserRank(userId: string) {
        const leaderboard = await this.getGlobal(1000);
        const index = leaderboard.findIndex(entry => entry.user.id === userId);
        return index >= 0 ? index + 1 : null;
    },
};
