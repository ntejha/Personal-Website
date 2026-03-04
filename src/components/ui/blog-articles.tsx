import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/mockData";

export interface BlogArticlesProps {
    readonly posts: readonly Readonly<BlogPost>[];
}

export default function BlogArticles({ posts }: BlogArticlesProps) {
    return (
        <section className="bg-background px-4 py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8 text-center sm:mb-12">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:mb-4">
                        From the Blog
                    </p>
                    <h2 className="text-2xl font-normal tracking-tight text-foreground sm:text-3xl md:text-5xl">
                        Latest Articles
                    </h2>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            className="group cursor-pointer border border-border/50 bg-card/50 shadow-none backdrop-blur-sm transition-shadow hover:shadow-md"
                        >
                            <div className="p-0">
                                {/* Gradient thumbnail */}
                                <div className="relative mb-4 sm:mb-6">
                                    <div
                                        className={cn(
                                            "flex h-64 w-full items-center justify-center bg-gradient-to-br sm:h-72 md:h-80",
                                            post.gradient
                                        )}
                                    >
                                        <span className="text-4xl text-white/80 drop-shadow-lg">
                                            📝
                                        </span>
                                    </div>
                                    <p className="absolute left-0 top-0 bg-card px-2 py-0.5 text-[10px] font-medium uppercase text-foreground backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                                        #{post.tags[0]}
                                    </p>
                                </div>

                                <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                                    <h3 className="mb-2 text-base font-normal tracking-tight text-foreground sm:text-lg md:text-2xl">
                                        {post.title}
                                    </h3>
                                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
                                        {post.summary}
                                    </p>

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <Link
                                            className="group/link relative flex items-center overflow-hidden text-xs font-medium text-foreground transition-colors hover:text-accent sm:text-sm"
                                            href={`/blog/${post.slug}`}
                                        >
                                            <span className="mr-2 overflow-hidden border border-border p-2 transition-colors duration-300 ease-in group-hover/link:bg-accent group-hover/link:text-white sm:p-3">
                                                <ArrowRight className="h-3 w-3 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover/link:translate-x-8 group-hover/link:opacity-0 sm:h-4 sm:w-4" />
                                                <ArrowRight className="absolute -left-4 top-1/2 h-4 w-4 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover/link:left-2 sm:-left-5 sm:h-4 sm:w-4 sm:group-hover/link:left-3" />
                                            </span>
                                            Read more
                                        </Link>
                                        <span className="flex items-center gap-2 text-[10px] text-muted-foreground sm:gap-3 sm:text-xs">
                                            {post.date}
                                            <span className="w-6 border-t border-border sm:w-16" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
