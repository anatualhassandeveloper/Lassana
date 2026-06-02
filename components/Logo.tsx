import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

interface LogoProps {
  variant?: "icon" | "full";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  light?: boolean;
}

const iconSizes = {
  sm: 36,
  md: 44,
  lg: 52,
};

export default function Logo({
  variant = "full",
  size = "md",
  showText = true,
  className,
  light = true,
}: LogoProps) {
  const iconSize = iconSizes[size];

  if (variant === "icon" || !showText) {
    return (
      <Image
        src="/logo-icon.svg"
        alt={`${COMPANY.name} logo`}
        width={iconSize}
        height={iconSize}
        className={cn("shrink-0", className)}
        priority
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo-icon.svg"
        alt=""
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        priority
        aria-hidden="true"
      />
      <div className="hidden sm:block">
        <span
          className={cn(
            "block text-sm font-bold tracking-wide",
            light ? "text-white" : "text-deep-blue"
          )}
        >
          {COMPANY.shortName}
        </span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.2em]",
            light ? "text-white/60" : "text-gray-accent"
          )}
        >
          Food Machinery
        </span>
      </div>
    </div>
  );
}
