import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/mockData";

export default function AboutSection() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/60 text-3xl font-bold text-white">
                    {siteConfig.author.name.charAt(0)}
                </div>
                <div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground">
                        Hello, I&apos;m {siteConfig.author.name}.
                    </h2>
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                        {siteConfig.author.bio}
                    </p>
                    <Button variant="ghost" href="#">
                        More about me <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
