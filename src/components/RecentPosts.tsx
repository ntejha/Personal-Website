import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/mockData";

export interface RecentPostsProps {
    readonly posts: readonly Readonly<BlogPost>[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                    Latest from the Blog
                </h2>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                    Read all articles <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
                Thoughts on data engineering, architecture, and tech.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                    >
                        <div
                            className={cn(
                                "flex h-28 items-center justify-center bg-gradient-to-br",
                                post.gradient
                            )}
                        >
                            <span className="text-2xl font-bold text-white/80">📝</span>
                        </div>
                        <div className="p-5">
                            <h3 className="mb-2 font-semibold text-card-foreground transition-colors group-hover:text-accent">
                                {post.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {post.summary}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{post.date}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
