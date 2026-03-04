"use client";

import HeroSection from "@/components/HeroSection";
import NeuralBackground from "@/components/ui/flow-field-background";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Flow field background — fills entire page */}
      <div className="fixed inset-0 -z-10">
        <NeuralBackground
          color="#818cf8"
          trailOpacity={0.08}
          speed={0.6}
          particleCount={400}
        />
      </div>

      <HeroSection />

      {/* Featured Projects — Coming Soon */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Featured Work</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 backdrop-blur-sm py-20">
          <Rocket className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-foreground">Coming Soon</h3>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Projects are on the way. Check back soon to see what I&apos;ve been building.
          </p>
        </div>
      </section>

      {/* Recent Blog Posts — Coming Soon */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Latest from the Blog</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 backdrop-blur-sm py-20">
          <Rocket className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-foreground">Coming Soon</h3>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Blog posts are in the works. Stay tuned for articles on data engineering, architecture, and more.
          </p>
        </div>
      </section>
    </div>
  );
}
