import type { ReactNode } from "react";

/**
 * SocialLinkRow — icon + label + anchor row used in the Contact page info panel.
 *
 * Usage:
 *   <SocialLinkRow
 *     icon={<Mail className="w-5 h-5 text-[#34F5A3]" />}
 *     label="Email"
 *     href="mailto:css.cpp.edu@gmail.com"
 *     linkText="css.cpp.edu@gmail.com"
 *   />
 *   <SocialLinkRow
 *     icon={<Instagram className="w-5 h-5 text-[#34F5A3]" />}
 *     label="Instagram"
 *     href="https://www.instagram.com/cppcss/"
 *     linkText="@cppcss"
 *     isExternal
 *   />
 */

interface SocialLinkRowProps {
  /** Lucide icon element, already sized/coloured */
  icon: ReactNode;
  /** Small heading above the link (e.g. "Email", "Instagram") */
  label: string;
  /** href for the anchor */
  href: string;
  /** Visible link text */
  linkText: string;
  /** When true, adds target="_blank" rel="noreferrer" */
  isExternal?: boolean;
}

export function SocialLinkRow({
  icon,
  label,
  href,
  linkText,
  isExternal = false,
}: SocialLinkRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-[#34F5A3]/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="text-white hover:text-[#34F5A3] transition-colors"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
