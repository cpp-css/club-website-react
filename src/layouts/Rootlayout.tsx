import { useLayoutEffect, type ComponentType, type SVGProps } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Braces,
  Github,
  Linkedin,
  Youtube,
  Mail,
  Instagram,
  MessageCircleMore,
  House,
  Calendar,
  FolderKanban,
  Users,
  UserPlus,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  FOOTER_NAV_LINKS,
  ROUTE_PATHS,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "../lib/navigation";
import { AnimeNavBar } from "../components/ui/animated-navbar";

type SocialIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const SOCIAL_ICON_MAP = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  discord: MessageCircleMore,
} as const satisfies Record<SocialPlatform, SocialIconComponent>;

const ANIME_NAV_ITEMS = [
  { name: "Home", url: ROUTE_PATHS.home, icon: House },
  { name: "Events", url: ROUTE_PATHS.events, icon: Calendar },
  { name: "Projects", url: ROUTE_PATHS.projects, icon: FolderKanban },
  { name: "E-Board", url: ROUTE_PATHS.eBoard, icon: Users },
  { name: "Contact", url: ROUTE_PATHS.contact, icon: UserPlus },
];

export default function Rootlayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to={ROUTE_PATHS.home} className="flex items-center gap-2">
              <div className="relative">
                <Braces className="w-8 h-8 text-[#34F5A3]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#34F5A3] rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-xl">CSS</span>
            </Link>

            <AnimeNavBar
              items={ANIME_NAV_ITEMS}
              defaultActive="Home"
              className="block"
            />
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-[#121212] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* LOGO SECTION */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Braces className="w-8 h-8 text-[#34F5A3]" />
                <span className="font-bold text-xl">CSS</span>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                CPP's home for developers, builders, and tech enthusiasts.
              </p>

              <p className="text-gray-500 text-xs font-mono">
                // Made with 💚 by Umar Azizadah
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>

              <div className="space-y-2">
                {FOOTER_NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-[#34F5A3] text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Mail className="w-4 h-4 text-[#34F5A3]" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#34F5A3]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICON_MAP[social.platform];

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.platform}
                      className="group w-10 h-10 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-[#34F5A3]/10 hover:border-[#34F5A3]/30 hover:text-[#34F5A3] hover:-translate-y-0.5 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Computer Science Society
            </p>

            <p className="text-gray-500 text-xs font-mono">
              console.log("Keep coding 🧩");
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
