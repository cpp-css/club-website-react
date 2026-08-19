import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

function getActiveTabFromPath(
  items: NavItem[],
  pathname: string,
  fallback: string,
) {
  const exactMatch = items.find((item) => item.url === pathname);
  if (exactMatch) {
    return exactMatch.name;
  }

  const prefixMatch = items.find(
    (item) => item.url !== "/" && pathname.startsWith(item.url),
  );

  return prefixMatch?.name ?? fallback;
}

export function AnimeNavBar({
  items,
  className,
  defaultActive = "Home",
}: NavBarProps) {
  const { pathname } = useLocation();
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveTab(getActiveTabFromPath(items, pathname, defaultActive));
  }, [items, pathname, defaultActive]);

  if (!mounted) return null;

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.name === activeTab),
  );

  return (
    <div className={cn("relative z-10", className)}>
      <motion.div
        className="grid grid-cols-5 gap-1 md:gap-3 relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isHovered = hoveredTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className={cn(
                "relative flex items-center justify-center cursor-pointer text-xs md:text-sm font-semibold px-2.5 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300",
                "text-white/70 hover:text-white",
                isActive && "text-white",
              )}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.2, 0.35, 0.2],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-primary/18 rounded-full blur-md" />
                  <div className="absolute inset-[-4px] bg-primary/12 rounded-full blur-xl" />
                  <div className="absolute inset-[-8px] bg-primary/8 rounded-full blur-2xl" />
                  <div className="absolute inset-[-12px] bg-primary/3 rounded-full blur-3xl" />

                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/12 to-primary/0"
                    style={{
                      animation: "shine 3s ease-in-out infinite",
                    }}
                  />
                </motion.div>
              )}

              <motion.span
                className="hidden md:inline relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
              <motion.span
                className="md:hidden relative z-10"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} strokeWidth={2.5} />
              </motion.span>

              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}
              </AnimatePresence>

            </Link>
          );
        })}

        <motion.div
          data-testid="anime-mascot"
          className="absolute -top-5 left-0 w-1/5 flex justify-center pointer-events-none"
          initial={false}
          animate={{ x: `${activeIndex * 100}%` }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="relative w-8 h-8">
            <motion.div
              className="absolute w-6 h-6 left-1/2 -translate-x-1/2 rounded-full bg-[#34F5A3] border border-[#2de091] shadow-[0_0_8px_rgba(52,245,163,0.25)]"
              animate={
                hoveredTab
                  ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 5, 0],
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      y: [0, -3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <motion.div
                className="absolute w-1 h-1 bg-black rounded-full"
                animate={
                  hoveredTab
                    ? {
                        scaleY: [1, 0.2, 1],
                        transition: {
                          duration: 0.2,
                          times: [0, 0.5, 1],
                        },
                      }
                    : {}
                }
                style={{ left: "26%", top: "38%" }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-black rounded-full"
                animate={
                  hoveredTab
                    ? {
                        scaleY: [1, 0.2, 1],
                        transition: {
                          duration: 0.2,
                          times: [0, 0.5, 1],
                        },
                      }
                    : {}
                }
                style={{ right: "26%", top: "38%" }}
              />
              <motion.div
                className="absolute w-1 h-0.5 bg-[#22c55e] rounded-full"
                animate={{
                  opacity: hoveredTab ? 0.85 : 0.65,
                }}
                style={{ left: "16%", top: "53%" }}
              />
              <motion.div
                className="absolute w-1 h-0.5 bg-[#22c55e] rounded-full"
                animate={{
                  opacity: hoveredTab ? 0.85 : 0.65,
                }}
                style={{ right: "16%", top: "53%" }}
              />

              <motion.div
                className="absolute w-2 h-1 border-b border-black rounded-full"
                animate={
                  hoveredTab
                    ? {
                        scaleY: 1.5,
                        y: -1,
                      }
                    : {
                        scaleY: 1,
                        y: 0,
                      }
                }
                style={{ left: "31%", top: "58%" }}
              />
              <AnimatePresence>
                {hoveredTab && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-1 -right-0.5 w-1.5 h-1.5 text-yellow-300"
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -top-1.5 left-0.5 w-1.5 h-1.5 text-yellow-300"
                    />
                  </>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="absolute -bottom-1 left-1/2 w-2 h-2 -translate-x-1/2"
              animate={
                hoveredTab
                  ? {
                      y: [0, -4, 0],
                      transition: {
                        duration: 0.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }
                  : {
                      y: [0, 2, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }
              }
            >
              <div className="w-full h-full bg-[#34F5A3] rotate-45 transform origin-center" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
