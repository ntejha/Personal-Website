import { getBlogPost, getBlogSlugs } from "@/lib/content";
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
    return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    return {
        title: post.meta.title,
        description: post.meta.summary,
        openGraph: {
            title: post.meta.title,
            description: post.meta.summary,
            ...(post.meta.image && { images: [post.meta.image] }),
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const { meta, content } = post;

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
                {/* Back link */}
                <Link
                    href="/blog"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>

                {/* Readable card container */}
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-4 sm:p-6 md:p-10">
                    {/* Header */}
                    <header className="mb-10">
                        <div className="mb-4 flex flex-wrap gap-2">
                            {meta.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-foreground">
                            {meta.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {meta.author && <span>{meta.author}</span>}
                            <span>·</span>
                            <span>
                                {new Date(meta.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                })}
                            </span>
                            {meta.readingTime && (
                                <>
                                    <span>·</span>
                                    <span>{meta.readingTime} min read</span>
                                </>
                            )}
                        </div>
                    </header>

                    {/* Markdown content */}
                    <MarkdownRenderer content={content} />
                </div>

                {/* Footer CTA */}
                <div className="mt-16 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 text-center">
                    <p className="mb-1 text-sm text-muted-foreground">
                        Found this useful?
                    </p>
                    <p className="text-foreground font-medium">
                        Subscribe to get notified when the next post drops.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Or reach out at{" "}
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=dev.tejha@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:underline"
                        >
                            dev.tejha@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
