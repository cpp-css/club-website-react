import { useState, useEffect } from "react";
import { Calendar, X, ChevronDown, Clock, ArrowRight } from "lucide-react";
import { eventsData } from "../data/eventsData";
import type { EventItem } from "../data/eventsData";
import eventsPageHeaderBackground from "../assets/redesignPhotos/EventsPageHeader.webp";
import eventsPageHeaderBackground2 from "../assets/redesignPhotos/EventsPageHeader2.webp";

/* Keyframes & utility styles */
const EVENTS_STYLES = `
  @keyframes hero-up {
    from { opacity:0; transform:translateY(32px) }
    to   { opacity:1; transform:none }
  }
  @keyframes scan-line {
    0%   { transform: translateY(-100%) }
    100% { transform: translateY(100vh) }
  }
  @keyframes pulse-dot {
    0%,100% { opacity:1; transform:scale(1) }
    50%     { opacity:.5; transform:scale(.75) }
  }
  @keyframes modal-in {
    from { opacity:0; transform:scale(.96) translateY(16px) }
    to   { opacity:1; transform:none }
  }
  @keyframes ticker-slide {
    from { transform: translateX(0) }
    to   { transform: translateX(-50%) }
  }

  .eha1 { animation: hero-up .9s cubic-bezier(.16,1,.3,1) .05s both }
  .eha2 { animation: hero-up .9s cubic-bezier(.16,1,.3,1) .18s both }
  .eha3 { animation: hero-up .9s cubic-bezier(.16,1,.3,1) .31s both }

  .modal-in { animation: modal-in .4s cubic-bezier(.16,1,.3,1) both }

  .scan-line {
    position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:1;
  }
  .scan-line::after {
    content:'';
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(52,245,163,.15),transparent);
    animation: scan-line 5s linear infinite;
  }

  .pulse-dot { animation: pulse-dot 2s ease-in-out infinite }

  .ticker-wrap { overflow:hidden; white-space:nowrap }
  .ticker-inner { display:inline-block; animation: ticker-slide 28s linear infinite }

  .card-glow:hover {
    box-shadow: 0 0 0 1px rgba(52,245,163,.3), 0 24px 60px rgba(52,245,163,.07);
  }

  .featured-glow {
    box-shadow: 0 0 0 1px rgba(52,245,163,.2), 0 32px 80px rgba(52,245,163,.1);
  }

  .no-scrollbar::-webkit-scrollbar { display:none }
  .no-scrollbar { -ms-overflow-style:none; scrollbar-width:none }
`;

/* ─── Date helpers ─────────────────────────────────────────────────── */
const parseLocal = (d: string) => {
  const p = d.split("-").map(Number);
  return p.length === 3 ? new Date(p[0], p[1] - 1, p[2]) : new Date(d);
};
const fmt = (d: string, opts: Intl.DateTimeFormatOptions) =>
  parseLocal(d).toLocaleDateString("en-US", opts);

/* ─── Ticker content ───────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "WORKSHOPS",
  "HACKATHONS",
  "GUEST SPEAKERS",
  "SOCIALS",
  "TECH TALKS",
];

/* ─── Featured (next upcoming) card ───────────────────────────────── */
function FeaturedCard({
  event,
  onOpen,
}: {
  event: EventItem;
  onOpen: (e: EventItem) => void;
}) {
  return (
    <div
      onClick={() => onOpen(event)}
      className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-[#111] featured-glow transition-all duration-500 hover:border-[#34F5A3]/40"
      style={{ minHeight: 420 }}
    >
      {/* Background flyer / gradient */}
      {event.flyer ? (
        <>
          <img
            src={event.flyer}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-[#34F5A3]/5 to-transparent" />
      )}

      {/* Card body: text left, flyer right */}
      <div
        className="relative z-10 flex items-stretch h-full"
        style={{ minHeight: 420 }}
      >
        {/* Left: text content */}
        <div className="flex flex-col flex-1 p-8 md:p-12">
          <div className="flex-1" />

          {/* Date line */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#34F5A3]" />
            <span className="text-[#34F5A3] font-mono text-sm tracking-widest uppercase">
              {fmt(event.dateISO, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl text-white mb-4 leading-tight max-w-xl">
            {event.title}
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8 line-clamp-2">
            {event.description}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(event);
            }}
            className="self-start flex items-center gap-2 px-6 py-3 bg-[#34F5A3] text-black rounded-xl font-semibold text-sm hover:bg-[#2de091] transition-colors group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: flyer panel */}
        {event.flyer && (
          <div className="hidden md:flex shrink-0 w-56 lg:w-72 items-center justify-center p-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg w-full">
              <img
                src={event.flyer}
                alt={event.title}
                className="w-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Past event row */
function PastRow({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: (e: EventItem) => void;
}) {
  return (
    <div
      onClick={() => onOpen(event)}
      className="group cursor-pointer flex gap-5 rounded-2xl border border-white/6 bg-[#0e0e0e] hover:bg-[#111] hover:border-white/12 transition-all duration-300 overflow-hidden card-glow"
    >
      {/* Index + date sidebar */}
      <div className="flex flex-col items-center justify-center bg-[#0a0a0a] border-r border-white/5 px-4 py-5 min-w-18 shrink-0">
        <span className="text-xs font-mono text-gray-600 mb-1">
          #{String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-white font-mono text-lg font-bold leading-none">
          {fmt(event.dateISO, { day: "numeric" })}
        </span>
        <span className="text-gray-500 text-xs font-mono uppercase mt-0.5">
          {fmt(event.dateISO, { month: "short" })}
        </span>
      </div>

      {/* Flyer thumbnail */}
      {event.flyer && (
        <div className="hidden sm:block w-20 h-auto shrink-0 overflow-hidden self-stretch">
          <img
            src={event.flyer}
            alt=""
            className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col justify-center py-4 pr-4 flex-1 min-w-0">
        <h4 className="text-white text-base font-semibold leading-snug line-clamp-1 group-hover:text-[#34F5A3] transition-colors duration-200">
          {event.title}
        </h4>
        <p className="text-gray-600 text-sm mt-1 line-clamp-1">
          {event.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center pr-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-4 h-4 text-[#34F5A3]" />
      </div>
    </div>
  );
}

/* Main page */
export const Events = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = eventsData
    .filter((e) => parseLocal(e.dateISO) >= today)
    .sort(
      (a, b) =>
        parseLocal(a.dateISO).getTime() - parseLocal(b.dateISO).getTime(),
    );
  const pastEvents = eventsData
    .filter((e) => parseLocal(e.dateISO) < today)
    .sort(
      (a, b) =>
        parseLocal(b.dateISO).getTime() - parseLocal(a.dateISO).getTime(),
    );

  const semesters = Array.from(new Set(pastEvents.map((e) => e.semester)))
    .sort()
    .reverse();

  const [selectedSemester, setSelectedSemester] = useState(semesters[0] ?? "");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const semesterEvents = pastEvents.filter(
    (e) => e.semester === selectedSemester,
  );

  const openEvent = (event: EventItem) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };
  const closeEvent = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "";
  };
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEvent();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <section className="bg-[#080808] text-white min-h-screen">
      <style>{EVENTS_STYLES}</style>

      {/* Hero */}
      <div className="relative pt-28 pb-0 px-6 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 flex">
          <img
            src={eventsPageHeaderBackground}
            alt="Events Page Header Background"
            className="w-188 h-120 object-cover opacity-70"
          />
          <img
            src={eventsPageHeaderBackground2}
            alt="Events Page Header Background2"
            className="w-190 h-120 object-cover opacity-70"
          />
        </div>
        {/* Scan line */}
        <div className="scan-line" />

        {/* Glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-[#34F5A3]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 left-10 w-60 h-60 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-10 right-16 w-48 h-48 bg-violet-500/5 rounded-full blur-[70px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative text-center pb-16">
          {/* Badge */}
          <div className="eha1 inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/25 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34F5A3] inline-block" />
            <span className="text-sm text-[#34F5A3] font-mono tracking-wide">
              events[]
            </span>
          </div>

          <h1 className="eha2 text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none">
            Our{" "}
            <span
              className="text-[#34F5A3]"
              style={{ textShadow: "0 0 40px rgba(52,245,163,.35)" }}
            >
              Events
            </span>
          </h1>

          <p className="eha3 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Workshops, hackathons, guest speakers, - explore everything CSS has
            hosted and what's on the horizon.
          </p>
        </div>

        {/* Bottom fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-b from-transparent to-[#080808] pointer-events-none" />
      </div>

      {/* Ticker*/}
      <div className="border-y border-white/5 bg-[#0d0d0d] py-3 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 mx-6 text-xs font-mono text-gray-300 uppercase tracking-[.25em]"
              >
                <span className="w-1 h-1 rounded-full bg-[#34F5A3]/40" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2.5">
              <span className="pulse-dot w-2 h-2 rounded-full bg-[#34F5A3]" />
              <span className="text-xs font-mono text-[#34F5A3] uppercase tracking-[.2em]">
                Upcoming
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-[#34F5A3]/20 to-transparent" />
            <span className="text-xs font-mono text-gray-600">
              {upcomingEvents.length} events
            </span>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border border-dashed border-white/8">
              <Calendar className="w-10 h-10 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-600 font-mono text-sm">
                // no upcoming events — check back soon
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {upcomingEvents.map((e) => (
                <FeaturedCard key={e.id} event={e} onOpen={openEvent} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Past Events */}
      <div className="py-1 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-gray-300" />
                <span className="text-xs font-mono text-gray-300 uppercase tracking-[.2em]">
                  Past Events
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-r from-white/8 to-transparent" />
              <span className="text-xs font-mono text-gray-600">
                {semesterEvents.length} events
              </span>
            </div>

            {/* Semester selector */}
            <div className="relative shrink-0">
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="appearance-none bg-[#111] border border-white/10 hover:border-[#34F5A3]/30 text-white text-xs font-mono rounded-xl px-4 py-2.5 pr-9 cursor-pointer transition-colors focus:outline-none focus:border-[#34F5A3]/50"
              >
                {semesters.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {semesterEvents.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border border-dashed border-white/8">
              <Calendar className="w-10 h-10 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-600 font-mono text-sm">
                // no events found for {selectedSemester}
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {semesterEvents.map((e, i) => (
                <PastRow key={e.id} event={e} index={i} onOpen={openEvent} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="modal-in relative w-full max-w-2xl max-h-[92vh] overflow-y-auto no-scrollbar bg-[#0f0f0f] border border-white/10 rounded-3xl shadow-2xl">
            {/* Accent top bar */}
            <div className="h-0.75 w-full bg-[#34F5A3]/40 rounded-t-3xl" />

            {/* Close */}
            <button
              onClick={closeEvent}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 transition-all"
            >
              <X className="w-4 h-4 text-gray-300" />
            </button>

            <div className="px-15 md:px-10 pb-10 -mt-6">
              {/* Flyer */}
              {selectedEvent.flyer && (
                <div className="rounded-2xl overflow-hidden border border-white/8 mb-7 max-w-sm mx-auto">
                  <img
                    src={selectedEvent.flyer}
                    alt={selectedEvent.title}
                    className="w-full object-contain max-h-126"
                  />
                </div>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-white/8 bg-white/3 text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {fmt(selectedEvent.dateISO, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                {selectedEvent.title}
              </h2>

              <div className="h-px bg-white/8 mb-6" />

              <p className="text-gray-300 leading-[1.85] text-base">
                {selectedEvent.description}
              </p>
            </div>
          </div>

          {/* Backdrop click */}
          <button
            onClick={closeEvent}
            className="absolute inset-0 -z-10"
            aria-label="Close"
          />
        </div>
      )}
    </section>
  );
};

export default Events;
