import Link from "next/link";
import { ArrowRight, ExternalLink, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/mockData";

export interface FeaturedProjectsProps {
    readonly projects: readonly Readonly<Project>[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Featured Work</h2>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                    View all projects <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
                A selection of my most recent projects.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                    >
                        <div
                            className={cn(
                                "flex h-36 items-center justify-center bg-gradient-to-br",
                                project.gradient
                            )}
                        >
                            <span className="text-3xl drop-shadow-lg">{project.icon}</span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="mb-2 font-semibold text-card-foreground">
                                {project.title}
                            </h3>
                            <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>
                            <div className="mb-3 flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                    <Badge key={t}>{t}</Badge>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="ghost" size="sm" href={project.liveUrl}>
                                    <ExternalLink className="h-3.5 w-3.5" /> View Live
                                </Button>
                                <Button variant="ghost" size="sm" href={project.sourceUrl}>
                                    <Code className="h-3.5 w-3.5" /> Source
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
