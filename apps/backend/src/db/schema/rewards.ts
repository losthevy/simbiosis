import { pgTable, text, timestamp, pgEnum, integer, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const rewardCategoryEnum = pgEnum("reward_category", ["voucher", "product", "donation"]);
export const redemptionStatusEnum = pgEnum("redemption_status", ["pending", "approved", "claimed", "expired"]);

export const rewards = pgTable("rewards", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    imageUrl: text("image_url"),
    category: rewardCategoryEnum("category").notNull(),
    pointsCost: integer("points_cost").notNull(),
    stock: integer("stock").default(0),
    isActive: boolean("is_active").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const rewardRedemptions = pgTable("reward_redemptions", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    rewardId: text("reward_id").notNull().references(() => rewards.id),
    pointsSpent: integer("points_spent").notNull(),
    status: redemptionStatusEnum("status").default("pending").notNull(),
    redeemedAt: timestamp("redeemed_at").defaultNow().notNull(),
});

export const rewardsRelations = relations(rewards, ({ many }) => ({
    redemptions: many(rewardRedemptions),
}));

export const redemptionsRelations = relations(rewardRedemptions, ({ one }) => ({
    user: one(users, { fields: [rewardRedemptions.userId], references: [users.id] }),
    reward: one(rewards, { fields: [rewardRedemptions.rewardId], references: [rewards.id] }),
}));
