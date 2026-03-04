import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
        return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!SCRIPT_URL) {
        console.error("GOOGLE_SCRIPT_URL not set in .env.local");
        return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    try {
        const payload = JSON.stringify({ email });

        // Step 1: POST to Apps Script — it will 302 redirect
        const res = await fetch(SCRIPT_URL, {
            method: "POST",
            body: payload,
            redirect: "manual", // Don't auto-follow (it converts POST→GET)
        });

        // Step 2: Follow redirect manually, re-sending as POST
        if (res.status === 302 || res.status === 301 || res.status === 307) {
            const redirectUrl = res.headers.get("location");
            if (redirectUrl) {
                await fetch(redirectUrl, {
                    method: "POST",
                    body: payload,
                    redirect: "follow",
                });
            }
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Subscribe error:", err);
        return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }
}
