import { db } from "../config/database";
import { reports, audits, newsArticles } from "../db/schema/reports";
import { eq, desc } from "drizzle-orm";

// Generate unique ID
function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const reportService = {
    // Reports
    async getAllReports() {
        return db.select().from(reports).orderBy(desc(reports.createdAt));
    },

    async getReportById(id: string) {
        const [report] = await db.select().from(reports).where(eq(reports.id, id));
        return report;
    },

    async createReport(data: {
        createdBy: string;
        title: string;
        reportType: "daily" | "weekly" | "monthly" | "custom" | "audit";
        data?: Record<string, unknown>;
        status?: "draft" | "published" | "archived";
    }) {
        const [report] = await db.insert(reports).values({
            id: generateId(),
            ...data,
        }).returning();
        return report;
    },

    async updateReport(id: string, data: Partial<typeof reports.$inferInsert>) {
        const [updated] = await db.update(reports)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(reports.id, id))
            .returning();
        return updated;
    },

    async deleteReport(id: string) {
        await db.delete(reports).where(eq(reports.id, id));
    },

    // Audits
    async getAllAudits() {
        return db.select().from(audits).orderBy(desc(audits.auditedAt));
    },

    async getAuditById(id: string) {
        const [audit] = await db.select().from(audits).where(eq(audits.id, id));
        return audit;
    },

    async createAudit(data: {
        auditorId: string;
        title: string;
        findings?: string;
        status?: "draft" | "published" | "archived";
    }) {
        const [audit] = await db.insert(audits).values({
            id: generateId(),
            ...data,
        }).returning();
        return audit;
    },

    async updateAudit(id: string, data: Partial<typeof audits.$inferInsert>) {
        const [updated] = await db.update(audits)
            .set(data)
            .where(eq(audits.id, id))
            .returning();
        return updated;
    },

    // News
    async getAllNews() {
        return db.select().from(newsArticles).orderBy(desc(newsArticles.publishedAt));
    },

    async createNews(data: {
        title: string;
        content: string;
        imageUrl?: string;
        category?: string;
    }) {
        const [news] = await db.insert(newsArticles).values({
            id: generateId(),
            ...data,
        }).returning();
        return news;
    },
};
