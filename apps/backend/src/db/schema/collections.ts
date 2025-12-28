import { pgTable, text, timestamp, pgEnum, decimal } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const collectionStatusEnum = pgEnum("collection_status", ["pending", "verified", "rejected"]);
export const pickupStatusEnum = pgEnum("pickup_status", ["pending", "in_progress", "completed", "cancelled"]);
export const pickupTypeEnum = pgEnum("pickup_type", ["residential", "commercial", "bulk"]);

export const wasteCollections = pgTable("waste_collections", {
    id: text("id").primaryKey(),
    collectionCode: text("collection_code").notNull().unique(),
    location: text("location").notNull(),
    brand: text("brand"),
    wasteType: text("waste_type").notNull(),
    weightKg: decimal("weight_kg", { precision: 10, scale: 2 }).notNull(),
    status: collectionStatusEnum("status").default("pending").notNull(),
    verifiedBy: text("verified_by").references(() => users.id),
    collectedAt: timestamp("collected_at").defaultNow().notNull(),
});

export const pickupTasks = pgTable("pickup_tasks", {
    id: text("id").primaryKey(),
    workerId: text("worker_id").notNull().references(() => users.id),
    locationName: text("location_name").notNull(),
    address: text("address").notNull(),
    pickupType: pickupTypeEnum("pickup_type").notNull(),
    wasteCollected: decimal("waste_collected", { precision: 8, scale: 2 }),
    status: pickupStatusEnum("status").default("pending").notNull(),
    scheduledAt: timestamp("scheduled_at").notNull(),
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const collectionsRelations = relations(wasteCollections, ({ one }) => ({
    verifier: one(users, { fields: [wasteCollections.verifiedBy], references: [users.id] }),
}));

export const pickupsRelations = relations(pickupTasks, ({ one }) => ({
    worker: one(users, { fields: [pickupTasks.workerId], references: [users.id] }),
}));
