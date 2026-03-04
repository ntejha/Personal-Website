"use client";

import { useState } from "react";
import { Search, Rocket } from "lucide-react";
import { ArticleCard } from "@/components/ui/blog-post-card";
import Pagination from "@/components/ui/Pagination";
import NeuralBackground from "@/components/ui/flow-field-background";
import { projects } from "@/data/mockData";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = projects.filter((p) => {
        if (searchQuery === "") return true;
        const q = searchQuery.toLowerCase();
        return (
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tech.some((t) => t.toLowerCase().includes(q))
        );
    });

    const totalPages = Math.max(
        1,
        Math.ceil(filtered.length / PROJECTS_PER_PAGE)
    );
    const paginated = filtered.slice(
        (currentPage - 1) * PROJECTS_PER_PAGE,
        currentPage * PROJECTS_PER_PAGE
    );

    return (
        <div className="relative">
            {/* Flow field background */}
            <div className="fixed inset-0 -z-10">
                <NeuralBackground
                    color="#818cf8"
                    trailOpacity={0.08}
                    speed={0.6}
                    particleCount={400}
                />
            </div>

            <div className="mx-auto max-w-5xl px-6 py-16">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                            Data Engineering Projects
                        </h1>
                        <p className="max-w-lg text-muted-foreground">
                            A collection of data engineering projects — from scalable ETL
                            pipelines and real-time streaming architectures to ML infrastructure
                            and cloud-native data platforms. Built with Python, Apache Airflow,
                            Snowflake, Spark, and modern tooling.
                        </p>
                    </div>

                    <div className="relative shrink-0">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            aria-label="Search data engineering projects"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full rounded-lg border border-border bg-background/80 backdrop-blur-sm py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent sm:w-56"
                        />
                    </div>
                </div>

                {/* Tech stack tags */}
                <div className="mb-10 flex flex-wrap gap-2">
                    {["Python", "Airflow", "Snowflake", "Spark", "Kafka", "Docker"].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-3 py-1 text-xs text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {paginated.length > 0 ? (
                    <>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {paginated.map((project) => (
                                <ArticleCard
                                    key={project.title}
                                    headline={project.title}
                                    excerpt={project.description}
                                    cover={project.image}
                                    gradient={project.gradient}
                                    icon={project.icon}
                                    tag={project.tech[0]}
                                    publishedAt={project.category}
                                    clampLines={3}
                                    href={project.liveUrl}
                                />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 backdrop-blur-sm py-20">
                        <Rocket className="h-12 w-12 text-muted-foreground" />
                        <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
                        <p className="max-w-md text-center text-sm text-muted-foreground">
                            {searchQuery
                                ? "No projects match your search."
                                : "I'm building out my project portfolio — data pipelines, streaming architectures, and ML infrastructure projects are on the way. Subscribe above to get notified."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
