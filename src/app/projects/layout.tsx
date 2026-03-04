import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — Data Engineering Portfolio",
    description:
        "Explore data engineering projects by Tejha — scalable ETL pipelines, real-time streaming systems, ML infrastructure, and cloud-native architectures built with modern technologies.",
    openGraph: {
        title: "Projects — Data Engineering Portfolio | Tejhalabs",
        description:
            "Data engineering projects: ETL pipelines, streaming systems, ML infrastructure, and cloud architectures.",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
