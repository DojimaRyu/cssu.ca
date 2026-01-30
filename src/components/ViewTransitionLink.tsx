"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ViewTransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

/**
 * A Link component that uses the View Transitions API for smooth page transitions
 * when the browser supports it. Falls back to normal navigation otherwise.
 */
export default function ViewTransitionLink({
  href,
  children,
  onClick,
  ...rest
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const pathname =
      typeof href === "string" ? href : (href as { pathname?: string }).pathname ?? "/";

    // only handle same-origin transitions
    if (
      target.origin === window.location.origin &&
      target.pathname !== window.location.pathname &&
      "startViewTransition" in document
    ) {
      e.preventDefault();
      (document as Document & { startViewTransition?: (cb: () => Promise<void>) => void })
        .startViewTransition(() => router.push(pathname));
    }

    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
