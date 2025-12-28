import "dotenv/config";
import { db } from "../config/database";
import { users, accounts } from "../db/schema/users";
import { hashPassword } from "better-auth/crypto";
import { eq } from "drizzle-orm";

// Generate simple ID
function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function seedDemoUsers() {
    console.log("🌱 Seeding demo users...\n");

    const demoUsers = [
        {
            email: "admin@simbiosis.id",
            name: "Admin Simbiosis",
            role: "admin" as const,
            password: "admin123",
        },
        {
            email: "petugas@simbiosis.id",
            name: "Petugas Simbiosis",
            role: "worker" as const,
            password: "petugas123",
        },
        {
            email: "warga@simbiosis.id",
            name: "Warga Simbiosis",
            role: "citizen" as const,
            password: "warga123",
        },
    ];

    for (const userData of demoUsers) {
        try {
            // Check if user already exists
            const existingUser = await db.select().from(users).where(eq(users.email, userData.email)).limit(1);

            if (existingUser.length > 0) {
                console.log(`⏭️  User already exists: ${userData.email}`);
                continue;
            }

            // Hash password
            const hashedPassword = await hashPassword(userData.password);

            // Generate IDs
            const userId = generateId();
            const accountId = generateId();

            // Insert user
            await db.insert(users).values({
                id: userId,
                email: userData.email,
                name: userData.name,
                emailVerified: new Date(),
                role: userData.role,
            });

            // Insert account (for email/password auth)
            await db.insert(accounts).values({
                id: accountId,
                userId: userId,
                accountId: userId,
                providerId: "credential",
                password: hashedPassword,
            });

            console.log(`✅ Created user: ${userData.email} (role: ${userData.role})`);
        } catch (error: any) {
            console.error(`❌ Error creating ${userData.email}:`, error.message);
        }
    }

    console.log("\n✨ Seeding complete!");
    console.log("\n📋 Demo Credentials:");
    console.log("─────────────────────────────────────────");
    console.log("Admin:   admin@simbiosis.id   / admin123");
    console.log("Petugas: petugas@simbiosis.id / petugas123");
    console.log("Warga:   warga@simbiosis.id   / warga123");
    console.log("─────────────────────────────────────────");

    process.exit(0);
}

seedDemoUsers().catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
});
