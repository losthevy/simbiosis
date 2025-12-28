import { pgTable, text, timestamp, pgEnum, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const reportTypeEnum = pgEnum("report_type", ["daily", "weekly", "monthly", "custom", "audit"]);
export const reportStatusEnum = pgEnum("report_status", ["draft", "published", "archived"]);

export const reports = pgTable("reports", {
    id: text("id").primaryKey(),
    createdBy: text("created_by").notNull().references(() => users.id),
    title: text("title").notNull(),
    reportType: reportTypeEnum("report_type").notNull(),
    data: jsonb("data").$type<Record<string, unknown>>(),
    status: reportStatusEnum("status").default("draft").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const audits = pgTable("audits", {
    id: text("id").primaryKey(),
    auditorId: text("auditor_id").notNull().references(() => users.id),
    title: text("title").notNull(),
    findings: text("findings"),
    status: reportStatusEnum("status").default("draft").notNull(),
    auditedAt: timestamp("audited_at").defaultNow().notNull(),
});

export const newsArticles = pgTable("news_articles", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    imageUrl: text("image_url"),
    category: text("category"),
    publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export const reportsRelations = relations(reports, ({ one }) => ({
    creator: one(users, { fields: [reports.createdBy], references: [users.id] }),
}));

export const auditsRelations = relations(audits, ({ one }) => ({
    auditor: one(users, { fields: [audits.auditorId], references: [users.id] }),
}));
