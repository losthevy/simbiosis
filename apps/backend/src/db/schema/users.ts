import { pgTable, text, timestamp, pgEnum, integer, decimal } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// User roles enum
export const userRoleEnum = pgEnum("user_role", ["citizen", "worker", "admin"]);

// Better Auth required tables (using text instead of uuid for compatibility)
export const users = pgTable("users", {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    emailVerified: timestamp("email_verified"),
    name: text("name").notNull(),
    image: text("image"),
    role: userRoleEnum("role").default("citizen").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const accounts = pgTable("accounts", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const verifications = pgTable("verifications", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// EcoPoints balance
export const userEcoPoints = pgTable("user_eco_points", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }).unique(),
    balance: integer("balance").default(0).notNull(),
    monetaryValue: decimal("monetary_value", { precision: 12, scale: 2 }).default("0"),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// EcoPoints transaction history
export const transactionTypeEnum = pgEnum("transaction_type", [
    "deposit", "redemption", "challenge_reward", "referral", "adjustment"
]);

export const ecoPointTransactions = pgTable("eco_point_transactions", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    amount: integer("amount").notNull(),
    type: transactionTypeEnum("type").notNull(),
    description: text("description"),
    referenceId: text("reference_id"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Friendships
export const friendshipStatusEnum = pgEnum("friendship_status", ["pending", "accepted", "blocked"]);

export const friendships = pgTable("friendships", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    friendId: text("friend_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    status: friendshipStatusEnum("status").default("pending").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
    ecoPoints: one(userEcoPoints, { fields: [users.id], references: [userEcoPoints.userId] }),
    transactions: many(ecoPointTransactions),
    sessions: many(sessions),
    friendships: many(friendships),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
    user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const ecoPointsRelations = relations(userEcoPoints, ({ one }) => ({
    user: one(users, { fields: [userEcoPoints.userId], references: [users.id] }),
}));

export const transactionsRelations = relations(ecoPointTransactions, ({ one }) => ({
    user: one(users, { fields: [ecoPointTransactions.userId], references: [users.id] }),
}));

export const friendshipsRelations = relations(friendships, ({ one }) => ({
    user: one(users, { fields: [friendships.userId], references: [users.id] }),
    friend: one(users, { fields: [friendships.friendId], references: [users.id] }),
}));
