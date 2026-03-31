import { Calendar, X } from "lucide-react";
import type { CSSProperties } from "react";
import type { EventItem } from "../../data/eventsData";
import { formatEventDate } from "../../lib/eventDate";
import { ModalShell } from "./ModalShell";

interface EventDetailsModalProps {
  event: EventItem | null;
  onClose: () => void;
  backdropClassName?: string;
  backdropStyle?: CSSProperties;
  dialogClassName?: string;
}

export function EventDetailsModal({
  event,
  onClose,
  backdropClassName,
  backdropStyle,
  dialogClassName,
}: EventDetailsModalProps) {
  if (!event) {
    return null;
  }

  return (
    <ModalShell
      onClose={onClose}
      backdropClassName={backdropClassName}
      backdropStyle={backdropStyle}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-3xl shadow-2xl ${dialogClassName ?? ""}`.trim()}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="h-0.75 w-full bg-[#34F5A3]/40 rounded-t-3xl" />

        <button
          type="button"
          onClick={onClose}
          className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 transition-all"
        >
          <X className="w-4 h-4 text-gray-300" />
        </button>

        <div className="px-15 md:px-10 pb-10 -mt-6">
          {event.flyer && (
            <div className="rounded-2xl overflow-hidden border border-white/8 mb-7 max-w-sm mx-auto">
              <img
                src={event.flyer}
                alt={event.title}
                className="w-full object-contain max-h-126"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-white/8 bg-white/3 text-gray-400">
              <Calendar className="w-3 h-3" />
              {formatEventDate(event.dateISO, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
            {event.title}
          </h2>

          {event.speaker && (
            <p className="-mt-2 mb-4 text-sm text-gray-400 font-mono">
              {event.speaker}
            </p>
          )}

          <div className="h-px bg-white/8 mb-6" />

          <p className="text-gray-300 leading-[1.85] text-base">
            {event.description}
          </p>
        </div>
      </div>
    </ModalShell>
  );
}
