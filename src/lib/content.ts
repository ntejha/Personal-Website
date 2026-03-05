import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ── Types ──────────────────────────────────────────────────────────────────

export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    category: string;
    gradient: string;
    image?: string;
    author?: string;
    readingTime?: number;
}

export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    category: string;
    gradient: string;
    icon: string;
    liveUrl: string;
    sourceUrl: string;
    image?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMdFiles<T extends Record<string, unknown>>(
    dir: string
): { meta: T & { slug: string }; content: string }[] {
    const fullPath = path.join(CONTENT_DIR, dir);

    if (!fs.existsSync(fullPath)) return [];

    return fs
        .readdirSync(fullPath)
        .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
        .map((filename) => {
            const raw = fs.readFileSync(path.join(fullPath, filename), "utf8");
            const { data, content } = matter(raw);
            const slug = filename.replace(/\.md$/, "");
            return { meta: { ...(data as T), slug }, content };
        });
}

// ── Blog API ───────────────────────────────────────────────────────────────

export function getAllBlogPosts(): BlogPostMeta[] {
    return readMdFiles<Omit<BlogPostMeta, "slug">>("blog")
        .map((p) => p.meta as BlogPostMeta)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(
    slug: string
): { meta: BlogPostMeta; content: string } | null {
    const all = readMdFiles<Omit<BlogPostMeta, "slug">>("blog");
    const match = all.find((p) => p.meta.slug === slug);
    if (!match) return null;
    return { meta: match.meta as BlogPostMeta, content: match.content };
}

export function getBlogSlugs(): string[] {
    return getAllBlogPosts().map((p) => p.slug);
}

// ── Projects API ───────────────────────────────────────────────────────────

export function getAllProjects(): ProjectMeta[] {
    return readMdFiles<Omit<ProjectMeta, "slug">>("projects")
        .map((p) => p.meta as ProjectMeta)
        .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProject(
    slug: string
): { meta: ProjectMeta; content: string } | null {
    const all = readMdFiles<Omit<ProjectMeta, "slug">>("projects");
    const match = all.find((p) => p.meta.slug === slug);
    if (!match) return null;
    return { meta: match.meta as ProjectMeta, content: match.content };
}

export function getProjectSlugs(): string[] {
    return getAllProjects().map((p) => p.slug);
}
