/**
 * SectionBadge — rectangular (rounded-lg) green-tinted label used as section
 * sub-headers throughout the site (About section, Contact panels, etc.).
 *
 * Usage:
 *   <SectionBadge label="{ who_we_are }" className="mb-4" />
 *
 * Pass margin / animation classes via `className`; core pill styles are built-in.
 */

interface SectionBadgeProps {
  /** Mono-text label rendered inside the badge */
  label: string;
  /** Extra classes (e.g. margin-bottom) */
  className?: string;
}

export function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg ${className}`}
    >
      <span className="text-sm text-[#34F5A3] font-mono">{label}</span>
    </div>
  );
}
