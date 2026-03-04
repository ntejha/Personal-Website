"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/mockData";
import NavHeader from "@/components/ui/nav-header";

export default function Header() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                {/* Brand */}
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-foreground"
                >
                    {siteConfig.name}
                </Link>

                {/* Desktop: Animated pill nav */}
                <div className="hidden md:flex md:items-center md:gap-4">
                    <NavHeader items={navLinks} />

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    )}

                    <Link
                        href="https://mail.google.com/mail/?view=cm&to=dev.tejha@gmail.com"
                        className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    )}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "text-accent"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://mail.google.com/mail/?view=cm&to=dev.tejha@gmail.com"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                        >
                            Contact Me
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
