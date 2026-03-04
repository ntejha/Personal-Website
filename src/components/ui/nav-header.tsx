"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
    readonly label: string;
    readonly href: string;
}

export interface NavHeaderProps {
    readonly items: readonly NavItem[];
    readonly className?: string;
}

function NavHeader({ items, className }: NavHeaderProps) {
    const pathname = usePathname();
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            className={cn(
                "relative mx-auto flex w-fit rounded-full border border-border bg-card p-1",
                className
            )}
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
            {items.map((item) => (
                <Tab
                    key={item.href}
                    href={item.href}
                    isActive={pathname === item.href}
                    setPosition={setPosition}
                >
                    {item.label}
                </Tab>
            ))}
            <Cursor position={position} />
        </ul>
    );
}

function Tab({
    children,
    href,
    isActive,
    setPosition,
}: {
    children: React.ReactNode;
    href: string;
    isActive: boolean;
    setPosition: (pos: { left: number; width: number; opacity: number }) => void;
}) {
    const ref = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });
            }}
            className="relative z-10 block"
        >
            <Link
                href={href}
                className={cn(
                    "block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground mix-blend-difference md:px-5 md:py-2.5 md:text-sm",
                    isActive && "text-accent"
                )}
            >
                {children}
            </Link>
        </li>
    );
}

function Cursor({
    position,
}: {
    position: { left: number; width: number; opacity: number };
}) {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-7 rounded-full bg-accent md:h-10"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
    );
}

export default NavHeader;
