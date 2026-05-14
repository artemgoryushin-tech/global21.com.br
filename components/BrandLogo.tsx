import Image from "next/image";
import { brandLogos } from "@/data/site";

type BrandLogoProps = {
  slug: string;
  name: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: {
    box: "h-11 w-11 rounded-2xl p-2",
    text: "text-xs",
    image: "max-h-7 max-w-7"
  },
  md: {
    box: "h-14 w-14 rounded-2xl p-2.5",
    text: "text-sm",
    image: "max-h-9 max-w-9"
  },
  lg: {
    box: "h-20 w-20 rounded-3xl p-3",
    text: "text-lg",
    image: "max-h-14 max-w-14"
  }
} as const;

function initials(name: string) {
  return name
    .replace("/", " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function BrandLogo({ slug, name, size = "md" }: BrandLogoProps) {
  const logo = brandLogos[slug];
  const classes = sizeClasses[size];

  return (
    <div
      className={`grid shrink-0 place-items-center overflow-hidden border border-line bg-white shadow-sm ${classes.box}`}
      aria-label={`${name} logo`}
    >
      {logo ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`h-auto w-auto object-contain ${classes.image}`}
        />
      ) : (
        <span className={`font-black tracking-tight text-brand ${classes.text}`}>{initials(name)}</span>
      )}
    </div>
  );
}
