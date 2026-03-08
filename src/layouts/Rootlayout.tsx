import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Braces,
  Github,
  Linkedin,
  Youtube,
  Mail,
  Instagram,
} from "lucide-react";

export default function Rootlayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <Braces className="w-8 h-8 text-[#34F5A3]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#34F5A3] rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-xl">CSS</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors ${isActive("/") ? "text-[#34F5A3]" : "text-gray-300 hover:text-[#34F5A3]"}`}
              >
                Home
              </Link>

              <Link
                to="/events"
                className={`transition-colors ${isActive("/events") ? "text-[#34F5A3]" : "text-gray-300 hover:text-[#34F5A3]"}`}
              >
                Events
              </Link>

              <Link
                to="/projects"
                className={`transition-colors ${isActive("/projects") ? "text-[#34F5A3]" : "text-gray-300 hover:text-[#34F5A3]"}`}
              >
                Projects
              </Link>

              <Link
                to="/e-board"
                className={`transition-colors ${isActive("/e-board") ? "text-[#34F5A3]" : "text-gray-300 hover:text-[#34F5A3]"}`}
              >
                E-Board
              </Link>

              <Link
                to="/contact"
                className={`transition-colors ${isActive("/contact") ? "text-[#34F5A3]" : "text-gray-300 hover:text-[#34F5A3]"}`}
              >
                Contact
              </Link>
            </div>
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
                // Made with 💚 by students
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>

              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-[#34F5A3] text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className="block text-gray-400 hover:text-[#34F5A3] text-sm"
                >
                  Events
                </Link>
                <Link
                  to="/projects"
                  className="block text-gray-400 hover:text-[#34F5A3] text-sm"
                >
                  Projects
                </Link>
                <Link
                  to="/e-board"
                  className="block text-gray-400 hover:text-[#34F5A3] text-sm"
                >
                  E-Board
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Mail className="w-4 h-4 text-[#34F5A3]" />
                <a
                  href="mailto:css.cpp.edu@gmail.com"
                  className="hover:text-[#34F5A3]"
                >
                  css.cpp.edu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/cppcss/"
                  target="_blank"
                  className="group w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#34F5A3]/10 hover:text-[#34F5A3]"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/cppcss/"
                  target="_blank"
                  className="group w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#34F5A3]/10 hover:text-[#34F5A3]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UC8sXz4RNrixxpLXBI56_jGw"
                  target="_blank"
                  className="group w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#34F5A3]/10 hover:text-[#34F5A3]"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/cpp-css"
                  target="_blank"
                  className="group w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#34F5A3]/10 hover:text-[#34F5A3]"
                >
                  <Github className="w-5 h-5" />
                </a>
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
