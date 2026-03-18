interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  children,
  className = "",
  align = "center",
}: SectionLabelProps) {
  return (
    <span
      className={`label-mono block mb-6 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </span>
  );
}
