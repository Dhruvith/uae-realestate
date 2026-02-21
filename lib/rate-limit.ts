type RateLimitResult = {
    success: boolean;
    remaining: number;
    resetIn: number;
};

type RateLimitEntry = {
    count: number;
    resetTime: number;
};

const store = new Map<string, RateLimitEntry>();

export function rateLimit(
    ip: string,
    limit: number = 5,
    windowMs: number = 3600000 // 1 hour
): RateLimitResult {
    const now = Date.now();
    const resetTime = now + windowMs;

    if (!store.has(ip)) {
        store.set(ip, { count: 1, resetTime });
        return { success: true, remaining: limit - 1, resetIn: windowMs };
    }

    const record = store.get(ip)!;

    // If the window has expired, reset
    if (now > record.resetTime) {
        store.set(ip, { count: 1, resetTime });
        return { success: true, remaining: limit - 1, resetIn: windowMs };
    }

    // Still within window
    record.count += 1;
    const remainingRemaining = Math.max(limit - record.count, 0);

    if (record.count > limit) {
        return {
            success: false,
            remaining: 0,
            resetIn: record.resetTime - now,
        };
    }

    return {
        success: true,
        remaining: remainingRemaining,
        resetIn: record.resetTime - now,
    };
}

// Optional cleanup interval to avoid memory leaks
setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of store.entries()) {
        if (now > entry.resetTime) {
            store.delete(ip);
        }
    }
}, 60000 * 5); // run every 5 mins
