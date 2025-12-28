import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth";
import routes from "./routes/index";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware";

const app = express();
const PORT = process.env.PORT || 4000;

// Security middleware
app.use(helmet());

// CORS - Allow multiple frontend origins
const allowedOrigins = [
    "http://localhost:3001", // citizen-app
    "http://localhost:3002", // workforce-app
    "http://localhost:3003", // admin-dashboard
    "http://localhost:5173", // vite default
    "http://localhost:5174",
    "http://localhost:5175",
    process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, Postman, etc)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(`CORS blocked origin: ${origin}`);
            callback(null, true); // Allow anyway for development
        }
    },
    credentials: true
}));

app.use(express.json());

// Better Auth handler (handles /api/auth/*)
app.all("/api/auth/*", toNodeHandler(auth));

// API routes
app.use("/api", routes);

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development"
    });
});

// 404 handler
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Simbiosis Backend running on http://localhost:${PORT}`);
    console.log(`📝 API docs: http://localhost:${PORT}/api`);
    console.log(`🔐 Auth endpoints: http://localhost:${PORT}/api/auth/*`);
});
