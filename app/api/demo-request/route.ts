import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { demoRequestSchema } from "@/lib/validations";
import { Resend } from "resend";

export const runtime = "nodejs";

const resendUrl = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "hello@mypropertyuae.com";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Honeypot check
        if (body.website && body.website.trim() !== "") {
            // Silently accept but do nothing (confuse bots)
            return NextResponse.json({ success: true });
        }

        // 2. Validate input
        const parseResult = demoRequestSchema.safeParse(body);
        if (!parseResult.success) {
            return NextResponse.json(
                { success: false, errors: parseResult.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const validData = parseResult.data;

        // 3. Save to database
        let demoRequest;
        try {
            demoRequest = await prisma.demoRequest.create({
                data: {
                    name: validData.name,
                    email: validData.email,
                    phone: validData.phone,
                    company: validData.company,
                    brokerType: validData.brokerType,
                    location: validData.location,
                    clientCount: validData.clientCount,
                    challenge: validData.challenge,
                    source: validData.source,
                },
            });
        } catch (dbError) {
            console.error("[demo-request-db-error]", dbError);
            return NextResponse.json(
                { success: false, error: "Database error. Please try again." },
                { status: 500 }
            );
        }

        // 4. Send Emails via Resend (async, don't await blocking response heavily if it fails)
        if (resendUrl) {
            try {
                await Promise.allSettled([
                    // Notification to team
                    resendUrl.emails.send({
                        from: "MyPropertyUAE <onboarding@mypropertyuae.com>",
                        to: NOTIFICATION_EMAIL,
                        subject: `New Demo Request: ${validData.name} - ${validData.company}`,
                        text: `New demo request received:\n\nName: ${validData.name}\nEmail: ${validData.email}\nPhone: ${validData.phone}\nCompany: ${validData.company}\nType: ${validData.brokerType}\nLocation: ${validData.location}\nClients: ${validData.clientCount}\nChallenge: ${validData.challenge || 'N/A'}\nSource: ${validData.source || 'N/A'}`
                    }),
                    // Confirmation to user
                    resendUrl.emails.send({
                        from: "MyPropertyUAE <hello@mypropertyuae.com>",
                        to: validData.email,
                        subject: "Your MyPropertyUAE Demo Request",
                        text: `Hi ${validData.name.split(' ')[0]},\n\nThanks for requesting a demo of MyPropertyUAE.\n\nWe review every request manually to ensure we're the right fit for your brokerage. Someone from our onboarding team will reach out within 24 hours at ${validData.phone} or reply to this email to schedule your 30-minute walkthrough.\n\nBest,\nThe MyPropertyUAE Team`
                    })
                ]);
            } catch (emailError) {
                console.error("[demo-request-email-error]", emailError);
                // Continue even if email fails - data is saved.
            }
        }

        // 5. Log success
        const ip = req.headers.get("x-forwarded-for") ?? "unknown";
        console.log("[demo-request]", {
            timestamp: new Date().toISOString(),
            email: validData.email,
            ip,
            success: true,
        });

        return NextResponse.json({ success: true, id: demoRequest.id });

    } catch (error) {
        console.error("[demo-request-error]", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
