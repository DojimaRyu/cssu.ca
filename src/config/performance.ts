/**
 * Performance optimization constants and utilities
 */

/**
 * Image loading strategies
 */
export const IMAGE_LOADING = {
  /**
   * Use for above-the-fold images (home page hero, navbar logo)
   */
  PRIORITY: "priority" as const,
  /**
   * Use for below-the-fold images (profile cards, event cards, footer)
   */
  LAZY: "lazy" as const,
} as const;

/**
 * Critical image paths that should be preloaded
 * These are images that appear above the fold on initial page load
 */
export const CRITICAL_IMAGES = [
  "/horizontal_logo_black.webp", // Navbar logo
  "/cssu_square.webp", // Home page hero (only on home page)
] as const;

/**
 * Determines if an image should use priority loading
 * @param isAboveFold - Whether the image is above the fold
 * @param isCritical - Whether the image is critical for initial render
 */
export function shouldUsePriorityLoading(
  isAboveFold: boolean,
  isCritical: boolean = false
): boolean {
  return isAboveFold || isCritical;
}
