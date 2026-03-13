/**
 * HeroBadge — green-tinted pill badge used in hero sections across all pages.
 * Renders a small green dot followed by mono-spaced label text.
 *
 * Usage:
 *   <HeroBadge label="events[]" className="eha1 mb-6" />
 *
 * Pass animation + margin classes via `className`; the core pill styles are built-in.
 */

interface HeroBadgeProps {
  /** Mono-text label rendered inside the badge */
  label: string;
  /** Extra classes (e.g. animation class + margin) */
  className?: string;
}

export function HeroBadge({ label, className = "" }: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/25 rounded-full ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#34F5A3] inline-block" />
      <span className="text-sm text-[#34F5A3] font-mono tracking-wide">
        {label}
      </span>
    </div>
  );
}
