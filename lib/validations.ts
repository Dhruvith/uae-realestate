import * as z from "zod";

// Remove HTML tags
const stripHtml = (str: string) => str.replace(/(<([^>]+)>)/gi, "");

export const demoRequestSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must be under 100 characters")
        .trim()
        .transform(stripHtml),
    email: z
        .string()
        .email("Please enter a valid email address")
        .max(254, "Email is too long")
        .trim()
        .transform(stripHtml),
    phone: z
        .string()
        .regex(/^[\+\d\s\-\(\)]{7,20}$/, "Please enter a valid phone number (e.g. +971 50 123 4567)")
        .trim()
        .transform(stripHtml),
    company: z
        .string()
        .min(2, "Company name is required")
        .max(100, "Company name gets too long")
        .trim()
        .transform(stripHtml),
    brokerType: z.enum(["solo", "small-team", "brokerage"], {
        errorMap: () => ({ message: "Please select a broker type" }),
    }),
    location: z.enum(["dubai", "abu-dhabi", "sharjah", "northern", "other"], {
        errorMap: () => ({ message: "Please select a location" }),
    }),
    clientCount: z.enum(["1-5", "6-15", "16-30", "30+"], {
        errorMap: () => ({ message: "Please select client count" }),
    }),
    challenge: z
        .string()
        .max(200, "Must be under 200 characters")
        .trim()
        .transform(stripHtml)
        .optional(),
    source: z
        .string()
        .max(100, "Must be under 100 characters")
        .trim()
        .transform(stripHtml)
        .optional(),
    website: z.string().max(0, "Invalid submission").optional(), // Honeypot
});

export type DemoRequestFormValues = z.infer<typeof demoRequestSchema>;
