import { getAllBlogPosts } from "@/lib/content";
import NeuralBackground from "@/components/ui/flow-field-background";
import BlogListClient from "@/components/BlogListClient";

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <div className="relative">
            {/* Flow field background */}
            <div className="fixed inset-0 -z-10">
                <NeuralBackground
                    color="#818cf8"
                    trailOpacity={0.08}
                    speed={0.6}
                    particleCount={400}
                />
            </div>

            {/* Readable card container */}
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-16">
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-4 sm:p-6 md:p-10">
                    <BlogListClient posts={posts} />
                </div>
            </div>
        </div>
    );
}
