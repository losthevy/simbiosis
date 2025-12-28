import { pgTable, text, timestamp, pgEnum, integer, decimal, date, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const wasteTypeEnum = pgEnum("waste_type", ["plastic", "paper", "metal", "glass", "organic", "electronic"]);
export const sensorStatusEnum = pgEnum("sensor_status", ["active", "inactive", "maintenance"]);
export const scheduleStatusEnum = pgEnum("schedule_status", ["pending", "confirmed", "completed", "cancelled"]);

export const bankSampahLocations = pgTable("bank_sampah_locations", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    address: text("address").notNull(),
    latitude: decimal("latitude", { precision: 10, scale: 7 }),
    longitude: decimal("longitude", { precision: 10, scale: 7 }),
    capacityPercent: integer("capacity_percent").default(0),
    sensorStatus: sensorStatusEnum("sensor_status").default("active"),
    acceptedWasteTypes: jsonb("accepted_waste_types").$type<string[]>(),
    lastEmptiedAt: timestamp("last_emptied_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const wasteDeposits = pgTable("waste_deposits", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    locationId: text("location_id").notNull().references(() => bankSampahLocations.id),
    wasteType: wasteTypeEnum("waste_type").notNull(),
    weightKg: decimal("weight_kg", { precision: 8, scale: 2 }).notNull(),
    pointsEarned: integer("points_earned").notNull(),
    depositedAt: timestamp("deposited_at").defaultNow().notNull(),
});

export const depositSchedules = pgTable("deposit_schedules", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    locationId: text("location_id").notNull().references(() => bankSampahLocations.id),
    scheduledDate: date("scheduled_date").notNull(),
    timeSlot: text("time_slot").notNull(),
    status: scheduleStatusEnum("status").default("pending").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const locationsRelations = relations(bankSampahLocations, ({ many }) => ({
    deposits: many(wasteDeposits),
    schedules: many(depositSchedules),
}));

export const depositsRelations = relations(wasteDeposits, ({ one }) => ({
    user: one(users, { fields: [wasteDeposits.userId], references: [users.id] }),
    location: one(bankSampahLocations, { fields: [wasteDeposits.locationId], references: [bankSampahLocations.id] }),
}));

export const schedulesRelations = relations(depositSchedules, ({ one }) => ({
    user: one(users, { fields: [depositSchedules.userId], references: [users.id] }),
    location: one(bankSampahLocations, { fields: [depositSchedules.locationId], references: [bankSampahLocations.id] }),
}));
