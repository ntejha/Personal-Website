"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/Card";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <Card className="w-full border-0 border-b border-border bg-black/[0.96] relative overflow-hidden rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#137fec"
            />

            <div className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[600px]">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                        Data Engineer — Available for hire
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                        Data Engineer building
                        <br />
                        scalable pipelines that{" "}
                        <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
                            matter.
                        </span>
                    </h1>
                    <p className="mt-6 text-neutral-300 max-w-lg leading-relaxed">
                        I&apos;m Tejha — a Data Engineer specializing in building scalable
                        data pipelines, real-time streaming systems, and ML infrastructure.
                        I write about ETL best practices, cloud architecture, and modern
                        data platforms on my tech blog.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                        >
                            View Projects <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-accent hover:text-white"
                        >
                            Read Blog
                        </Link>
                    </div>
                </div>

                {/* Right content — Spline 3D */}
                <div className="flex-1 relative min-h-[300px] md:min-h-0" aria-hidden="true">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    );
}
