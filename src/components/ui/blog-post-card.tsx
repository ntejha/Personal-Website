"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export interface ArticleCardProps {
    headline: string;
    excerpt: string;
    cover?: string;
    gradient?: string;
    icon?: string;
    tag?: string;
    readingTime?: number;
    writer?: string;
    publishedAt?: string;
    clampLines?: number;
    href?: string;
}

export function formatReadTime(seconds: number): string {
    if (!seconds || seconds < 60) return "Less than 1 min read";
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} min read`;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    cover,
    gradient,
    icon,
    tag,
    readingTime,
    headline,
    excerpt,
    writer,
    publishedAt,
    clampLines,
    href,
}) => {
    const hasMeta = tag || readingTime;
    const hasFooter = writer || publishedAt;

    const Wrapper = href ? "a" : "div";
    const wrapperProps = href ? { href } : {};

    return (
        <Wrapper {...wrapperProps}>
            <Card className="flex w-full flex-col gap-3 overflow-hidden rounded-3xl border border-border p-3 shadow-lg transition-all hover:shadow-xl hover:shadow-accent/5">
                {/* Cover — real image or gradient fallback */}
                <CardHeader className="p-0">
                    <div className="relative h-40 sm:h-56 w-full overflow-hidden rounded-2xl">
                        {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={cover}
                                alt={headline}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div
                                className={cn(
                                    "flex h-full w-full items-center justify-center bg-gradient-to-br",
                                    gradient || "from-accent to-sky-400"
                                )}
                            >
                                <span className="text-4xl drop-shadow-lg">
                                    {icon || "📄"}
                                </span>
                            </div>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow p-3">
                    {hasMeta && (
                        <div className="mb-4 flex items-center text-sm text-muted-foreground">
                            {tag && (
                                <Badge className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:text-foreground">
                                    {tag}
                                </Badge>
                            )}
                            {tag && readingTime && <span className="mx-2">•</span>}
                            {readingTime && <span>{formatReadTime(readingTime)}</span>}
                        </div>
                    )}

                    <h2 className="mb-2 text-lg sm:text-xl font-bold leading-tight text-card-foreground">
                        {headline}
                    </h2>

                    <p
                        className={cn("text-sm text-muted-foreground", {
                            "overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box]":
                                clampLines && clampLines > 0,
                        })}
                        style={{ WebkitLineClamp: clampLines }}
                    >
                        {excerpt}
                    </p>
                </CardContent>

                {hasFooter && (
                    <CardFooter className="flex items-center justify-between p-3">
                        {writer && (
                            <div>
                                <p className="text-sm text-muted-foreground">By</p>
                                <p className="font-semibold text-muted-foreground">{writer}</p>
                            </div>
                        )}
                        {publishedAt && (
                            <div className={writer ? "text-right" : ""}>
                                <p className="text-sm text-muted-foreground">Published</p>
                                <p className="font-semibold text-muted-foreground">
                                    {publishedAt}
                                </p>
                            </div>
                        )}
                    </CardFooter>
                )}
            </Card>
        </Wrapper>
    );
};
