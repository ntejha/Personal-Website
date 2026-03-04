import { cn } from "@/lib/utils";

export interface FilterTabsProps {
    readonly categories: readonly string[];
    readonly active: string;
    readonly onSelect: (category: string) => void;
}

export default function FilterTabs({
    categories,
    active,
    onSelect,
}: FilterTabsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={cn(
                        "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                        active === cat
                            ? "bg-accent text-white"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
