"use client";

import { useState } from "react";
import { Search, Rocket } from "lucide-react";
import { ArticleCard } from "@/components/ui/blog-post-card";
import Pagination from "@/components/ui/Pagination";
import type { BlogPostMeta } from "@/lib/content";

const POSTS_PER_PAGE = 6;

interface BlogListClientProps {
    posts: BlogPostMeta[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = posts.filter((p) => {
        if (searchQuery === "") return true;
        const q = searchQuery.toLowerCase();
        return (
            p.title.toLowerCase().includes(q) ||
            p.summary.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q))
        );
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
    const paginated = filtered.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        Data Engineering Blog
                    </h1>
                    <p className="max-w-lg text-sm sm:text-base text-muted-foreground">
                        Deep-dives into data pipelines, ETL architecture, real-time
                        streaming, cloud infrastructure, and developer productivity.
                    </p>
                </div>

                <div className="relative shrink-0">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        aria-label="Search blog articles"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full rounded-lg border border-border bg-background/80 backdrop-blur-sm py-2 min-h-[44px] pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent sm:w-56"
                    />
                </div>
            </div>

            {/* Topics */}
            <div className="mb-10 flex flex-wrap gap-2">
                {["Data Pipelines", "ETL", "Streaming", "Cloud", "ML Ops", "Tutorials"].map((topic) => (
                    <span
                        key={topic}
                        className="rounded-full border border-border bg-card/50 backdrop-blur-sm px-3 py-1 text-xs text-muted-foreground"
                    >
                        {topic}
                    </span>
                ))}
            </div>

            {paginated.length > 0 ? (
                <>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {paginated.map((post) => (
                            <ArticleCard
                                key={post.slug}
                                headline={post.title}
                                excerpt={post.summary}
                                cover={post.image}
                                gradient={post.gradient}
                                icon="📝"
                                tag={post.tags[0]}
                                readingTime={post.readingTime}
                                writer={post.author}
                                publishedAt={post.date}
                                clampLines={3}
                                href={`/blog/${post.slug}`}
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
                            ? "No articles match your search."
                            : "I'm currently writing articles on data engineering best practices, pipeline architecture, and cloud infrastructure. Subscribe above to get notified when the first post drops."}
                    </p>
                </div>
            )}
        </>
    );
}
