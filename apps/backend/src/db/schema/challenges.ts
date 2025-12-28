import { pgTable, text, timestamp, pgEnum, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const challengeStatusEnum = pgEnum("challenge_status", ["draft", "active", "completed", "cancelled"]);
export const challengeCategoryEnum = pgEnum("challenge_category", ["environment", "recycling", "community", "plastic_free"]);
export const participationStatusEnum = pgEnum("participation_status", ["active", "completed", "abandoned"]);

export const challenges = pgTable("challenges", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url"),
    category: challengeCategoryEnum("category").notNull(),
    rewardPoints: integer("reward_points").notNull(),
    startDate: timestamp("start_date").notNull(),
    endDate: timestamp("end_date").notNull(),
    location: text("location"),
    targetParticipants: integer("target_participants"),
    status: challengeStatusEnum("status").default("draft").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const challengeParticipations = pgTable("challenge_participations", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    challengeId: text("challenge_id").notNull().references(() => challenges.id, { onDelete: "cascade" }),
    progressPercent: integer("progress_percent").default(0).notNull(),
    status: participationStatusEnum("status").default("active").notNull(),
    joinedAt: timestamp("joined_at").defaultNow().notNull(),
    completedAt: timestamp("completed_at"),
});

export const challengesRelations = relations(challenges, ({ many }) => ({
    participations: many(challengeParticipations),
}));

export const participationsRelations = relations(challengeParticipations, ({ one }) => ({
    user: one(users, { fields: [challengeParticipations.userId], references: [users.id] }),
    challenge: one(challenges, { fields: [challengeParticipations.challengeId], references: [challenges.id] }),
}));
