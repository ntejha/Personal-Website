import type { Metadata } from "next";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "About — Tejha, Data Engineer",
    description:
        "Learn about Tejha — a Data Engineer specializing in scalable data pipelines, real-time streaming, ML infrastructure, and cloud architectures.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
            <h1 className="mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                About Me
            </h1>

            <div className="prose prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Hi, I&apos;m <strong className="text-foreground">Tejha</strong> — an
                    aspiring Data Engineer passionate about crafting clean, efficient, and
                    scalable data systems.
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                    I&apos;m currently exploring the depths of real-time streaming systems,
                    ML pipeline infrastructure, and modern cloud-native data platforms. My
                    focus is on building data pipelines that are not just functional but
                    maintainable, observable, and designed to scale.
                </p>

                <h2 className="mt-8 sm:mt-10 mb-4 text-lg sm:text-xl font-semibold text-foreground">
                    What I Work With
                </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="mb-2 text-sm font-semibold text-foreground">Languages & Frameworks</h3>
                        <p className="text-sm text-muted-foreground">Python, SQL, TypeScript, Apache Spark, Apache Airflow</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="mb-2 text-sm font-semibold text-foreground">Data & Cloud</h3>
                        <p className="text-sm text-muted-foreground">Snowflake, Kafka, PostgreSQL, AWS, GCP, Docker</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="mb-2 text-sm font-semibold text-foreground">Tools & Practices</h3>
                        <p className="text-sm text-muted-foreground">Git, CI/CD, dbt, Terraform, Data Modeling</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="mb-2 text-sm font-semibold text-foreground">Interests</h3>
                        <p className="text-sm text-muted-foreground">Real-time Streaming, ML Ops, Data Mesh, Platform Engineering</p>
                    </div>
                </div>

                <h2 className="mt-8 sm:mt-10 mb-4 text-lg sm:text-xl font-semibold text-foreground">
                    About This Site
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                    This site is my personal tech blog and project portfolio. I built it
                    using Next.js, Tailwind CSS, and TypeScript — with designs generated
                    through Google Stitch and developed in Google Antigravity IDE.
                    It&apos;s where I share what I learn and showcase what I build.
                </p>

                <h2 className="mt-8 sm:mt-10 mb-4 text-lg sm:text-xl font-semibold text-foreground">
                    Get in Touch
                </h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://github.com/ntejha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 min-h-[44px] text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/ntejha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a
                        href="https://x.com/ntejha04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                        <Twitter className="h-4 w-4" /> X (Twitter)
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=dev.tejha@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                        <Mail className="h-4 w-4" /> Email
                    </a>
                </div>
            </div>
        </div>
    );
}
