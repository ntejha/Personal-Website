import { getProject, getProjectSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NeuralBackground from "@/components/ui/flow-field-background";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};
    return {
        title: project.meta.title,
        description: project.meta.description,
        openGraph: {
            title: project.meta.title,
            description: project.meta.description,
            ...(project.meta.image && { images: [project.meta.image] }),
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const { meta, content } = project;

    return (
        <div className="relative">
            <div className="fixed inset-0 -z-10">
                <NeuralBackground
                    color="#818cf8"
                    trailOpacity={0.08}
                    speed={0.6}
                    particleCount={400}
                />
            </div>

            <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
                <Link
                    href="/projects"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-4 sm:p-6 md:p-10">
                    <header className="mb-10">
                        <div className="mb-4 flex flex-wrap gap-2">
                            {meta.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-foreground">
                            {meta.title}
                        </h1>
                        <p className="text-muted-foreground">{meta.description}</p>
                        <div className="mt-4 flex gap-3">
                            {meta.liveUrl && (
                                <a
                                    href={meta.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                                >
                                    Live Demo
                                </a>
                            )}
                            {meta.sourceUrl && (
                                <a
                                    href={meta.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Source Code
                                </a>
                            )}
                        </div>
                    </header>

                    <MarkdownRenderer content={content} />
                </div>
            </div>
        </div>
    );
}
