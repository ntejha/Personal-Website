// ── Types ──────────────────────────────────────────────────────────────────

export interface Project {
    readonly title: string;
    readonly description: string;
    readonly tech: readonly string[];
    readonly liveUrl: string;
    readonly sourceUrl: string;
    readonly gradient: string;
    readonly icon: string;
    readonly category: string;
    readonly image?: string;
}

export interface BlogPost {
    readonly title: string;
    readonly date: string;
    readonly summary: string;
    readonly tags: readonly string[];
    readonly slug: string;
    readonly category: string;
    readonly gradient: string;
    readonly image?: string;
    readonly author?: string;
    readonly readingTime?: number;
}

export interface NavLink {
    readonly label: string;
    readonly href: string;
}

// ── Site Config ────────────────────────────────────────────────────────────

export const siteConfig = {
    name: "Tejhalabs",
    title: "Data Engineer Portfolio",
    description:
        "Personal tech portfolio and blog — building scalable data pipelines and modern architectures.",
    author: {
        name: "Tejha",
        role: "Data Engineer",
        bio: "I'm a Data Engineer passionate about crafting clean, efficient, and scalable data systems. Currently exploring the depths of real-time streaming and ML pipelines in modern data platforms.",
    },
} as const;

// ── Navigation ─────────────────────────────────────────────────────────────

export const navLinks: readonly NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
];

// ── Projects (empty — add .md files in content/projects/) ──────────────────

export const projects: readonly Project[] = [];

// ── Blog Posts (empty — add .md files in content/blog/) ────────────────────

export const blogPosts: readonly BlogPost[] = [
    {
        slug: "how-i-built-my-portfolio-website",
        title: "How I Built My Portfolio Website Using AI — No Design Skills Required",
        summary:
            "I'm a Data Engineer, not a designer. Here's how I used Google Stitch, Antigravity, and a bunch of AI agents to vibe-code my entire portfolio without touching Figma.",
        date: "2026-03-04",
        author: "Tejha",
        readingTime: 8,
        tags: ["AI", "Web Dev", "Next.js", "Vibe Coding"],
        category: "Tutorial",
        gradient: "from-indigo-500 to-purple-600",
    },
];

// ── Footer ─────────────────────────────────────────────────────────────────

export const footerNavigation = {
    sitemap: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
    ],
    resources: [
        { label: "Uses", href: "#" },
        { label: "Guestbook", href: "#" },
        { label: "Snippets", href: "#" },
    ],
} as const;
