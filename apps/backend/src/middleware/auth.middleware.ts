import { Request, Response, NextFunction } from "express";
import { auth, Session } from "../config/auth";
import { fromNodeHeaders } from "better-auth/node";

declare global {
    namespace Express {
        interface Request {
            user?: Session["user"];
            session?: Session["session"];
        }
    }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });

        if (!session) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        req.user = session.user;
        req.session = session.session;
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
}

export function roleMiddleware(...allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        if (!allowedRoles.includes((req.user as any).role)) {
            return res.status(403).json({ error: "Forbidden" });
        }

        next();
    };
}
