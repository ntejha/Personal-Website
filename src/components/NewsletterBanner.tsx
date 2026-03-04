"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterBanner() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            setStatus(res.ok ? "success" : "error");
            if (res.ok) setEmail("");
        } catch {
            setStatus("error");
        }
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <section className="border-b border-border bg-card">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">Stay in the loop</p>
                        <p className="text-xs text-muted-foreground">Get notified when I publish new posts and projects.</p>
                    </div>
                </div>

                {status === "success" ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                        <CheckCircle className="h-4 w-4" /> Thanks! You&apos;re subscribed.
                    </div>
                ) : status === "error" ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                        <AlertCircle className="h-4 w-4" /> Something went wrong. Try again.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex w-full gap-2 sm:w-auto">
                        <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent sm:w-60" />
                        <button type="submit" disabled={status === "loading"} className="shrink-0 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50">
                            {status === "loading" ? "..." : "Subscribe"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
