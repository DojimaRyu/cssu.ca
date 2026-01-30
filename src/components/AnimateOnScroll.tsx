"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "fade-scale"
  | "slide-left"
  | "slide-right";

type AnimateOnScrollProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  /** animate once, the first time we see it */
  once?: boolean;
  /** determines how much of the image u have to see before we transition */
  threshold?: number;
  rootMargin?: string;
  className?: string;
};

const variantClasses: Record<AnimationVariant, string> = {
  "fade-up": "animate-scroll-fade-up",
  "fade-in": "animate-scroll-fade-in",
  "fade-scale": "animate-scroll-fade-scale",
  "slide-left": "animate-scroll-slide-left",
  "slide-right": "animate-scroll-slide-right",
};

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -30px 0px",
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  const baseClass = "animate-scroll-reveal";
  const variantClass = variantClasses[variant];
  const visibleClass = isVisible ? "animate-scroll-visible" : "";
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`${baseClass} ${variantClass} ${visibleClass} ${className}`.trim()}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
