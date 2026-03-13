export const ROUTE_PATHS = {
  home: "/",
  events: "/events",
  projects: "/projects",
  eBoard: "/e-board",
  contact: "/contact",
} as const;

export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

export interface NavLinkItem {
  path: RoutePath;
  label: string;
  showInFooter: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { path: ROUTE_PATHS.home, label: "Home", showInFooter: true },
  { path: ROUTE_PATHS.events, label: "Events", showInFooter: true },
  { path: ROUTE_PATHS.projects, label: "Projects", showInFooter: true },
  { path: ROUTE_PATHS.eBoard, label: "E-Board", showInFooter: true },
  { path: ROUTE_PATHS.contact, label: "Contact/Join", showInFooter: false },
];

export const FOOTER_NAV_LINKS = NAV_LINKS.filter((link) => link.showInFooter);

export type SocialPlatform = "instagram" | "linkedin" | "youtube" | "github";

export interface SocialLinkItem {
  platform: SocialPlatform;
  href: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/cppcss/",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/company/cppcss/",
  },
  {
    platform: "youtube",
    href: "https://www.youtube.com/channel/UC8sXz4RNrixxpLXBI56_jGw",
  },
  {
    platform: "github",
    href: "https://github.com/cpp-css",
  },
];

export const CONTACT_EMAIL = "css.cpp.edu@gmail.com";
