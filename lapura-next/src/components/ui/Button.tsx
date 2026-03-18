import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center font-dm-sans text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-near-black text-white px-8 py-3.5 hover:bg-accent-gold hover:text-near-black",
    secondary:
      "text-near-black underline-offset-4 hover:underline hover:text-accent-gold group",
    ghost:
      "border border-light-grey text-near-black px-6 py-3 hover:border-accent-gold hover:text-accent-gold",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {variant === "secondary" && (
          <span className="ml-1.5 inline-block group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {variant === "secondary" && (
        <span className="ml-1.5 inline-block group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      )}
    </button>
  );
}
