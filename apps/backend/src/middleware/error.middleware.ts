import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

// Validation middleware factory
export function validate(schema: ZodSchema, target: "body" | "query" | "params" = "body") {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = schema.parse(req[target]);
            req[target] = data; // Replace with validated/transformed data
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errors = error.errors.map((err) => ({
                    field: err.path.join("."),
                    message: err.message,
                }));
                return res.status(400).json({
                    error: "Validation error",
                    details: errors,
                });
            }
            next(error);
        }
    };
}

// Custom error class for API errors
export class ApiError extends Error {
    constructor(
        public statusCode: number,
        message: string,
        public details?: unknown
    ) {
        super(message);
        this.name = "ApiError";
    }
}

// Error handler middleware
export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(`[Error] ${err.name}: ${err.message}`);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            error: err.message,
            details: err.details,
        });
    }

    if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));
        return res.status(400).json({
            error: "Validation error",
            details: errors,
        });
    }

    // Database errors
    if (err.message.includes("duplicate key")) {
        return res.status(409).json({
            error: "Data sudah ada",
        });
    }

    if (err.message.includes("foreign key")) {
        return res.status(400).json({
            error: "Referensi data tidak valid",
        });
    }

    // Default error
    res.status(500).json({
        error: process.env.NODE_ENV === "development" ? err.message : "Internal server error",
    });
}

// Not found handler
export function notFoundHandler(req: Request, res: Response) {
    res.status(404).json({
        error: "Endpoint tidak ditemukan",
        path: req.path,
    });
}

// Async handler wrapper - catches async errors
export function asyncHandler(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
