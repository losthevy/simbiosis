import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./database";
import { users, sessions, accounts, verifications } from "../db/schema/users";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: users,
            session: sessions,
            account: accounts,
            verification: verifications,
        },
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "citizen",
            },
        },
    },
    trustedOrigins: [
        "http://localhost:3001", // citizen-app
        "http://localhost:3002", // workforce-app
        "http://localhost:3003", // admin-dashboard
        "http://localhost:5173", // vite default
        "http://localhost:5174",
        "http://localhost:5175",
        process.env.FRONTEND_URL,
    ].filter(Boolean) as string[],
});

export type Session = typeof auth.$Infer.Session;
