import HeroSection from "@/components/HeroSection";
import NeuralBackground from "@/components/ui/flow-field-background";
import { getAllBlogPosts, getAllProjects } from "@/lib/content";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const latestPosts = getAllBlogPosts().slice(0, 3);
  const latestProjects = getAllProjects().slice(0, 3);

  return (
    <div className="relative">
      {/* Flow field background — fills entire page */}
      <div className="fixed inset-0 -z-10">
        <NeuralBackground
          color="#818cf8"
          trailOpacity={0.08}
          speed={0.6}
          particleCount={400}
        />
      </div>

      <HeroSection />

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Featured Work</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {latestProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestProjects.map((project) => (
              <ArticleCard
                key={project.slug}
                headline={project.title}
                excerpt={project.description}
                cover={project.image}
                gradient={project.gradient}
                icon={project.icon}
                tag={project.tech[0]}
                publishedAt={project.category}
                clampLines={3}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 backdrop-blur-sm py-20">
            <Rocket className="h-12 w-12 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">Coming Soon</h3>
            <p className="max-w-md text-center text-sm text-muted-foreground">
              Projects are on the way. Check back soon to see what I&apos;ve been building.
            </p>
          </div>
        )}
      </section>

      {/* Recent Blog Posts */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Latest from the Blog</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {latestPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
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
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 backdrop-blur-sm py-20">
            <Rocket className="h-12 w-12 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">Coming Soon</h3>
            <p className="max-w-md text-center text-sm text-muted-foreground">
              Blog posts are in the works. Stay tuned for articles on data engineering, architecture, and more.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
