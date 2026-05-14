import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
