import { ExternalLink, Code } from "lucide-react";
import { CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/mockData";

export interface ProjectCardProps {
    readonly project: Readonly<Project>;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            {/* Gradient thumbnail */}
            <div
                className={cn(
                    "flex h-40 items-center justify-center bg-gradient-to-br",
                    project.gradient
                )}
            >
                <span className="text-4xl drop-shadow-lg">{project.icon}</span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-base font-semibold text-card-foreground">
                    {project.title}
                </h3>
                <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                    ))}
                </div>
                <CardFooter className="mt-auto p-0">
                    <Button variant="ghost" size="sm" href={project.liveUrl}>
                        <ExternalLink className="h-3.5 w-3.5" /> View Live
                    </Button>
                    <Button variant="ghost" size="sm" href={project.sourceUrl}>
                        <Code className="h-3.5 w-3.5" /> Source
                    </Button>
                </CardFooter>
            </div>
        </div>
    );
}
