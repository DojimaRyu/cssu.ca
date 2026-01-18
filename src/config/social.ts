/**
 * Social media and external links configuration
 * Contains all social media links and external URLs used throughout the site
 */

export type SocialLink = {
  icon: "email" | "facebook" | "instagram" | "linkedin" | "discord" | "github";
  text: string;
  href: string;
};

export const SOCIAL_LINKS = {
  email: "mailto:cssu@cdf.toronto.edu",
  facebook: "https://facebook.com/UofTCSSU",
  instagram: "https://instagram.com/uoftcssu",
  linkedin: "https://linkedin.com/company/computer-science-student-union",
  discord: "https://discord.gg/R9hneMaafD",
  github: "https://github.com/cssu",
} as const;

export const FOOTER_SOCIAL_SECTION: SocialLink[] = [
  {
    icon: "email",
    text: "Email",
    href: SOCIAL_LINKS.email,
  },
  {
    icon: "facebook",
    text: "Facebook",
    href: SOCIAL_LINKS.facebook,
  },
  {
    icon: "instagram",
    text: "Instagram",
    href: SOCIAL_LINKS.instagram,
  },
  {
    icon: "linkedin",
    text: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
  },
];

export const FOOTER_WORKSPACES_SECTION: SocialLink[] = [
  {
    icon: "discord",
    text: "Discord",
    href: SOCIAL_LINKS.discord,
  },
  {
    icon: "github",
    text: "Github",
    href: SOCIAL_LINKS.github,
  },
];

export const FOOTER_SITE_ISSUES_LINK = {
  icon: "github" as const,
  text: "Report it on GitHub",
  href:
    "https://github.com/cssu/cssu.github.io/issues/new" +
    "?template=site-issue.yml" +
    "&assignees=JasonBarahan,bbayazit16" +
    "&labels=bug" +
    "&title=[Site%20issue]%20your%20title%20goes%20here",
};

// Mailchimp configuration
// TODO: Clean up this form and make it functional
export const MAILCHIMP_CONFIG = {
  formAction: "",
  hiddenInputName: "b_c7b34cca67c5aa62532130cbe_e5040d3cd0",
} as const;
