import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rateLimit } from "./lib/rate-limit";

// Applies rate limiting specifically for the demo-request API
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/api/demo-request")) {
        const ip =
            request.headers.get("x-forwarded-for") ??
            request.headers.get("x-real-ip") ??
            "127.0.0.1";

        const burstLimit = 5; // 5 per IP per hour
        const limitResult = rateLimit(ip, burstLimit, 3600000);

        if (!limitResult.success) {
            console.warn(`[RATE LIMIT] Blocked IP: ${ip} from demo-request API.`);
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }
    }

    // Security headers are added in next.config.ts for general responses,
    // but we pass the request unmodified if it passes all checks.
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};
