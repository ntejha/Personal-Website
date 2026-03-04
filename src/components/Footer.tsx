"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig, footerNavigation } from "@/data/mockData";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="grid gap-8 sm:grid-cols-2">
                    {/* Brand + tagline */}
                    <div>
                        <p className="mb-3 text-sm font-bold text-foreground">
                            {siteConfig.name}
                        </p>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Building the future one pipeline at a time.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/ntejha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                            <a href="https://linkedin.com/in/ntejha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                            <a href="https://x.com/ntejha04" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="X (Twitter)"><Twitter className="h-5 w-5" /></a>
                            <a href="mailto:dev.tejha@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email"><Mail className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Sitemap</h4>
                        <ul className="space-y-2">
                            {footerNavigation.sitemap.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
                        <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
