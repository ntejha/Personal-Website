import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Data Engineering Articles & Tutorials",
    description:
        "Read articles on data engineering, ETL pipelines, cloud architecture, real-time streaming, and modern data platforms. Tutorials and deep-dives by Tejha.",
    openGraph: {
        title: "Blog — Data Engineering Articles & Tutorials | Tejhalabs",
        description:
            "Articles on data engineering, ETL pipelines, cloud architecture, and modern data platforms.",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
