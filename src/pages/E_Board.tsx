import { useState } from "react";
import { ChevronDown } from "lucide-react";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import eboardImg from "../assets/redesignPhotos/eboardImage.jpg";

import { currentBoard as currentOfficers } from "../data/currentBoard";
import { formerBoard } from "../data/formerBoard";
import { HeroBadge } from "../components/ui/HeroBadge";

const EBOARD_STYLES = `
  @keyframes hero-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
  .ha1{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .1s both}
  .ha2{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .22s both}
  .ha3{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .34s both}
  .ha4{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .46s both}
  @keyframes card-in{from{opacity:0;transform:scale(.97) translateY(16px)}to{opacity:1;transform:none}}
  .feat-in { animation: card-in .45s cubic-bezier(.16,1,.3,1) both; }
  @keyframes pulse-glow {
    0%,100%{opacity:.5;transform:scale(1)}
    50%{opacity:.85;transform:scale(1.07)}
  }
  .glow-pulse{animation:pulse-glow 4.5s ease-in-out infinite}
  @keyframes float-dot{
    0%,100%{transform:translateY(0)}
    50%{transform:translateY(-7px)}
  }
  .fdot-a{animation:float-dot 3.2s ease-in-out infinite}
  .fdot-b{animation:float-dot 4.1s ease-in-out infinite .6s}
  .fdot-c{animation:float-dot 3.7s ease-in-out infinite 1.1s}
`;

export const EBoard = () => {
  const [active, setActive] = useState(0);
  const [showCurrent, setShowCurrent] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const CURRENT_BOARD_YEAR = "2025-2026";

  // Build the dropdown options from former board data (unique, non-empty year ranges)
  const formerYears = Array.from(
    new Set(
      formerBoard
        .map((m) => m.boardYear)
        .filter(
          (year): year is string => typeof year === "string" && year.length > 0,
        ),
    ),
  ).sort((a, b) => {
    // Sort by most recent start year first (e.g., 2024-2025 before 2023-2024)
    const aStart = Number(a.split("-")[0]);
    const bStart = Number(b.split("-")[0]);
    return bStart - aStart;
  });

  // Selected year for the Former Board view; "all" shows every former officer
  const [selectedFormerYear, setSelectedFormerYear] = useState<string>(
    formerYears[0] ?? "all",
  );

  // Apply the year filter to the former board list
  const formerOfficers =
    selectedFormerYear === "all"
      ? formerBoard
      : formerBoard.filter((m) => m.boardYear === selectedFormerYear);

  const officers = showCurrent
    ? currentOfficers
    : formerOfficers.length > 0
      ? formerOfficers
      : formerBoard;
  // Clamp the active index so filtering can't leave us pointing past the end
  const safeActiveIndex = Math.min(active, Math.max(0, officers.length - 1));
  const activeOfficer = officers[safeActiveIndex];

  const displayedBoardYear = showCurrent
    ? CURRENT_BOARD_YEAR
    : selectedFormerYear === "all"
      ? "All"
      : selectedFormerYear;

  return (
    <>
      <style>{EBOARD_STYLES}</style>
      {/* Hero Section */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#080808]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,245,163,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(52,245,163,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow blobs */}
        <div className="glow-pulse absolute top-[-80px] left-[26%] w-[540px] h-[540px] rounded-full bg-[#34F5A3]/7 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-[8%] w-[300px] h-[300px] rounded-full bg-[#34F5A3]/5 blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-[40%] w-[160px] h-[160px] rounded-full bg-[#34F5A3]/6 blur-[60px] pointer-events-none z-0" />

        {/* Hero image — left half, masked into layout */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-full lg:w-[58%] z-10 pointer-events-none">
          <img
            src={eboardImg}
            alt="CSS E-Board"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.8) contrast(1.06) saturate(0.88)" }}
          />
          {/* right bleed */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 80%, rgba(8,8,8,0.65) 95%, #080808 100%)",
            }}
          />
          {/* bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #080808 0%, transparent 28%)",
            }}
          />
          {/* top fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #080808 0%, transparent 18%)",
            }}
          />
          {/* subtle green grade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(52,245,163,0.05) 75%, transparent 95%)",
            }}
          />
        </div>

        {/* Mobile hero image */}
        <div className="relative z-10 lg:hidden px-4 sm:px-6 pt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src={eboardImg}
              alt="CSS E-Board"
              className="w-full h-[42vh] sm:h-[48vh] object-cover object-center"
              style={{
                filter: "brightness(0.8) contrast(1.06) saturate(0.88)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #080808 0%, transparent 32%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(52,245,163,0.05) 75%, transparent 95%)",
              }}
            />
          </div>
        </div>

        {/* Content — right side */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full py-10 sm:py-14 lg:py-0">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full lg:w-[52%] xl:w-[47%]">
              {/* Glass panel */}
              <div
                className="relative rounded-3xl p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(2px)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5)",
                }}
              >
                {/* top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#34F5A3]/40 to-transparent" />

                {/* Badge */}
                <HeroBadge label="meet_the_team()" className="ha1 mb-7" />

                {/* Title */}
                <h1 className="ha2 pha2 text-5xl md:text-7xl mb-6 tracking-tight">
                  E-<span className="text-[#34F5A3]">Board</span>
                </h1>

                {/* Accent divider */}
                <div className="ha3 h-px w-16 bg-[#34F5A3]/50 mb-6" />

                {/* Subtitle */}
                <p className="ha3 text-lg text-gray-300 leading-relaxed max-w-sm mb-8">
                  Meet the passionate students leading CSS and making awesome
                  things happen!⭐👥
                </p>

                {/* Stats row */}
                <div className="ha4 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {currentOfficers.length}
                    </p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      officers
                    </p>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {displayedBoardYear}
                    </p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      school year
                    </p>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#34F5A3]">CPP</p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      campus
                    </p>
                  </div>
                </div>

                {/* bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>

              {/* Floating decorative dots */}
              <div className="hidden lg:flex items-center gap-3 mt-6 pl-2">
                <span className="fdot-a w-2 h-2 rounded-full bg-[#34F5A3]/60 inline-block" />
                <span className="fdot-b w-1.5 h-1.5 rounded-full bg-[#34F5A3]/30 inline-block" />
                <span className="fdot-c w-1 h-1 rounded-full bg-[#34F5A3]/20 inline-block" />
                <span className="text-xs font-mono text-gray-450 ml-1">
                  // scroll down to meet the team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom page fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to bottom, transparent, #080808)",
          }}
        />
      </section>

      {/* Main Board Section */}
      <section
        id="e-board"
        className="relative bg-black text-white px-6 py-20 overflow-hidden"
      >
        {/* Background glow accents */}
        <div className="absolute left-[-120px] top-24 w-[260px] h-[260px] rounded-full bg-[#34F5A3]/5 blur-3xl pointer-events-none" />
        <div className="absolute right-[-120px] bottom-20 w-[260px] h-[260px] rounded-full bg-[#34F5A3]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Active Member Featured Card */}
          <div
            key={animKey}
            className="feat-in relative grid lg:grid-cols-[380px_1fr] gap-8 items-center bg-gradient-to-br from-[#151515] to-[#101010] border border-white/10 rounded-[32px] p-5 md:p-4 lg:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/5 pointer-events-none" />

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-2 bg-[#34F5A3]/10 blur-2xl rounded-[32px] opacity-60" />
              <img
                src={activeOfficer.img}
                alt={activeOfficer.name}
                className="relative w-full h-[420px] md:h-[500px] object-cover rounded-[28px] border border-white/10 shadow-lg"
                style={{ filter: "brightness(0.88) contrast(1.08)" }}
              />
              {/* right-side fade */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, transparent 55%, #111 100%)",
                }}
              />
              {/* bottom fade */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-[#34F5A3]/10 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Toggle */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="relative flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/20 cursor-pointer select-none">
                  {/* Sliding background */}
                  <span
                    className={`absolute top-1 bottom-1 w-1/2 rounded-xl bg-[#34F5A3] shadow-[0_0_12px_rgba(52,245,163,0.45)] transition-all duration-300 ${
                      showCurrent ? "left-1" : "left-[50%]"
                    }`}
                  />

                  <button
                    className={`relative z-10 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                      showCurrent
                        ? "text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setShowCurrent(true);
                      setActive(0);
                      setAnimKey((k) => k + 1);
                    }}
                  >
                    Current Board
                  </button>

                  <button
                    className={`relative z-10 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                      !showCurrent
                        ? "text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setShowCurrent(false);
                      setActive(0);
                      setAnimKey((k) => k + 1);
                    }}
                  >
                    Former Board
                  </button>
                </div>

                {/* Show the year dropdown only when viewing the Former Board and we have year options */}
                {!showCurrent && formerYears.length > 0 && (
                  <div className="relative shrink-0">
                    <select
                      value={selectedFormerYear}
                      onChange={(e) => {
                        // Update the filter, then reset the active card so the UI always points to a valid member
                        setSelectedFormerYear(e.target.value);
                        setActive(0);
                        setAnimKey((k) => k + 1);
                      }}
                      className="appearance-none bg-[#34F5A3]/6 border border-[#34F5A3]/45 hover:border-[#34F5A3]/70 text-white text-xs font-mono rounded-xl px-4 py-2.5 pr-9 cursor-pointer transition-colors focus:outline-none focus:border-[#34F5A3]/80 focus:ring-2 focus:ring-[#34F5A3]/25"
                    >
                      <option value="all">All Years</option>
                      {formerYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-[#34F5A3]/80 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex px-3 py-1 rounded-full bg-[#34F5A3]/10 text-[#34F5A3] border border-[#34F5A3]/20 text-sm font-mono">
                  {activeOfficer.title}
                </div>
              </div>

              <h3 className="text-3xl md:text-5xl font-semibold mb-3 tracking-tight">
                {activeOfficer.name}
              </h3>

              <div className="flex gap-4 mb-8">
                {activeOfficer.github ? (
                  <a
                    href={activeOfficer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#34F5A3]/10 hover:border-[#34F5A3]/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                  </a>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center opacity-40">
                    <img
                      src={githubIcon}
                      alt="GitHub disabled"
                      className="w-5 h-5"
                    />
                  </div>
                )}

                {activeOfficer.linkedin ? (
                  <a
                    href={activeOfficer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#34F5A3]/10 hover:border-[#34F5A3]/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-5 h-5"
                    />
                  </a>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center opacity-40">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn disabled"
                      className="w-5 h-5"
                    />
                  </div>
                )}
              </div>

              <div className="h-px w-full bg-gradient-to-r from-[#34F5A3]/20 via-white/10 to-transparent mb-8" />

              <p className="text-gray-300 leading-8 text-base md:text-lg max-w-3xl">
                {activeOfficer.desc}
              </p>
            </div>
          </div>

          {/* Member Selector */}
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5">
              {officers.map((officer, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setAnimKey((k) => k + 1);
                  }}
                  className="group flex flex-col items-center gap-3 cursor-pointer"
                  aria-label={`View ${officer.name}`}
                >
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] transition-all duration-300 ${
                      active === i
                        ? "bg-[#34F5A3] scale-105 shadow-[0_0_25px_rgba(52,245,163,0.25)]"
                        : "bg-white/10 hover:bg-[#34F5A3]/50 hover:scale-105"
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#121212]">
                      <img
                        src={officer.img}
                        alt={officer.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <p
                      className={`text-sm font-medium transition-colors ${
                        active === i
                          ? "text-[#34F5A3]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {officer.name}
                    </p>
                    <p className="text-xs text-gray-500 max-w-[90px] leading-tight">
                      {officer.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mt-1">
              {officers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setAnimKey((k) => k + 1);
                  }}
                  style={{
                    width: active === i ? 20 : 6,
                    height: 6,
                    borderRadius: 99,
                    background:
                      active === i ? "#34F5A3" : "rgba(255,255,255,.12)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition:
                      "width .3s cubic-bezier(.16,1,.3,1), background .25s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
