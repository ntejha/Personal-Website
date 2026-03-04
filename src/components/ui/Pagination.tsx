import { cn } from "@/lib/utils";

export interface PaginationProps {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                        page === currentPage
                            ? "bg-accent text-white"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}
