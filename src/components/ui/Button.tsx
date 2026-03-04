import { cn } from "@/lib/utils";

export interface ButtonProps
    extends Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    readonly variant?: "primary" | "secondary" | "ghost";
    readonly size?: "sm" | "md" | "lg";
    readonly href?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    href,
    children,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

    const variants = {
        primary: "bg-accent text-white hover:bg-accent-hover",
        secondary:
            "border border-border bg-card text-card-foreground hover:bg-muted",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-muted",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
