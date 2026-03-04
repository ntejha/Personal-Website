"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Focus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface HalideTopoHeroProps {
    readonly className?: string;
}

export const HalideTopoHero: React.FC<HalideTopoHeroProps> = ({
    className,
}) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const layersRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;

            canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

            layersRef.current.forEach((layer, index) => {
                if (!layer) return;
                const depth = (index + 1) * 15;
                const moveX = x * (index + 1) * 0.2;
                const moveY = y * (index + 1) * 0.2;
                layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
            });
        };

        canvas.style.opacity = "0";
        canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.8)";

        const timeout = setTimeout(() => {
            canvas.style.transition =
                "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)";
            canvas.style.opacity = "1";
            canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
        }, 300);

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <section
            className={cn(
                "relative flex h-[85vh] min-h-[600px] items-center justify-center overflow-hidden bg-background",
                className
            )}
        >
            {/* SVG Grain Filter */}
            <svg className="absolute h-0 w-0" aria-hidden="true">
                <filter id="topo-grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>

            {/* Grain Overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-[100] opacity-[0.06] dark:opacity-[0.12]"
                style={{ filter: "url(#topo-grain)" }}
            />

            {/* 3D Viewport */}
            <div
                className="flex h-full w-full items-center justify-center overflow-hidden"
                style={{ perspective: "2000px" }}
            >
                <div
                    ref={canvasRef}
                    className="relative h-[500px] w-[800px]"
                    style={{
                        transformStyle: "preserve-3d",
                        transition:
                            "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    {/* Layer 1 — Mountain */}
                    <div
                        ref={(el) => {
                            if (el) layersRef.current[0] = el;
                        }}
                        className="absolute inset-0 border border-border/10 transition-transform duration-500 ease-out"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "grayscale(1) contrast(1.2) brightness(0.5)",
                        }}
                    />
                    {/* Layer 2 — Valley */}
                    <div
                        ref={(el) => {
                            if (el) layersRef.current[1] = el;
                        }}
                        className="absolute inset-0 border border-border/10 opacity-60 transition-transform duration-500 ease-out"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "grayscale(1) contrast(1.1) brightness(0.7)",
                            mixBlendMode: "screen",
                        }}
                    />
                    {/* Layer 3 — Depth */}
                    <div
                        ref={(el) => {
                            if (el) layersRef.current[2] = el;
                        }}
                        className="absolute inset-0 border border-border/10 opacity-40 transition-transform duration-500 ease-out"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "grayscale(1) contrast(1.3) brightness(0.8)",
                            mixBlendMode: "overlay",
                        }}
                    />
                    {/* Contour Lines */}
                    <div
                        className="pointer-events-none absolute"
                        style={{
                            width: "200%",
                            height: "200%",
                            top: "-50%",
                            left: "-50%",
                            backgroundImage:
                                "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px)",
                            transform: "translateZ(120px)",
                        }}
                    />
                </div>
            </div>

            {/* Interface Grid Overlay */}
            <div className="pointer-events-none fixed inset-0 z-10 grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-4 p-8 sm:p-12 lg:p-16">
                {/* Top left — Brand */}
                <div className="flex items-start gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                    TEJHALABS
                </div>

                {/* Top right — Meta */}
                <div className="flex flex-col items-end gap-1 font-mono text-[0.65rem] text-accent">
                    <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> DATA ENGINEERING
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Focus className="h-3 w-3" /> PIPELINE DEPTH: ∞
                    </span>
                </div>

                {/* Center — Hero Title */}
                <h1
                    className="col-span-2 self-center text-foreground"
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 8rem)",
                        lineHeight: 0.85,
                        letterSpacing: "-0.04em",
                        fontWeight: 700,
                        mixBlendMode: "difference",
                    }}
                >
                    BUILD
                    <br />
                    <span className="text-accent">SCALE</span>
                </h1>

                {/* Bottom bar */}
                <div className="col-span-2 flex items-end justify-between">
                    <div className="font-mono text-[0.7rem] text-muted-foreground">
                        <p>[ PORTFOLIO 2025 ]</p>
                        <p>PIPELINES &amp; ARCHITECTURES</p>
                    </div>

                    <div className="pointer-events-auto flex gap-3">
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-bold text-background transition-all hover:-translate-y-1 hover:bg-accent"
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)",
                            }}
                        >
                            VIEW PROJECTS <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/blog"
                            className="flex items-center gap-2 border border-border px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
                        >
                            READ BLOG
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Hint */}
            <div
                className="absolute bottom-8 left-1/2 z-10 h-[60px] w-px"
                style={{
                    background:
                        "linear-gradient(to bottom, var(--foreground), transparent)",
                    animation: "topo-flow 2s infinite ease-in-out",
                }}
            />

            <style>{`
        @keyframes topo-flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
        </section>
    );
};

export default HalideTopoHero;
