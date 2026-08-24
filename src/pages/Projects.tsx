import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const PROJECTS_HERO_STYLES = `
  @keyframes hero-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
  .pha1{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .1s both}
  .pha2{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .22s both}
  .pha3{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .34s both}

  @keyframes scan-line {
    0%   { transform: translateY(-100%) }
    100% { transform: translateY(100vh) }
  }

  .scan-line {
    position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:1;
  }
  .scan-line::after {
    content:'';
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(52,245,163,.15),transparent);
    animation: scan-line 5s linear infinite;
  }
`;
import projectsBanner from "../assets/redesignPhotos/projectStudents2.webp";
import projectPageHeaderBackground from "../assets/redesignPhotos/ProjectPageHeaderBackground.webp";
import projectPageHeaderBackground2 from "../assets/redesignPhotos/ProjectPageHeader2.webp";
import {
  projectsData,
  type Project,
  type ProjectTechnologies,
} from "../data/projectsData";
import {
  compareProjectsByRecencyDesc,
  compareProjectYearsDesc,
} from "../lib/projectYear";
import { HeroBadge } from "../components/ui/HeroBadge";
import { ProjectDetailsModal } from "../components/ui/ProjectDetailsModal";
import { useModalController } from "../lib/useModalController";

const getTechnologyValues = (technologies: ProjectTechnologies) =>
  Object.values(technologies).filter((value): value is string[] =>
    Array.isArray(value),
  );

export const Projects = () => {
  const {
    selected: selectedProject,
    open: openProject,
    close: closeProject,
  } = useModalController<Project>();
  const projects = projectsData;

  // Build the dropdown options from the data (unique, non-empty year ranges)
  const years = Array.from(
    new Set(
      projects
        .map((p) => p.year)
        .filter(
          (year): year is string => typeof year === "string" && year.length > 0,
        ),
    ),
  ).sort(compareProjectYearsDesc);

  // "all" means no filtering (show every project)
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Apply the selected year filter to the projects displayed in the grid
  const yearFilteredProjects =
    selectedYear === "all"
      ? projects
      : projects.filter((project) => project.year === selectedYear);

  const renderProjects =
    selectedYear === "all"
      ? [...yearFilteredProjects].sort(compareProjectsByRecencyDesc)
      : yearFilteredProjects;

  // Derived states, when the page loads, all three stats count up to their real calculates values
  const totalContributors = projects.reduce((sum, project) => {
    const membersInProject = project.team.reduce(
      (teamSum, group) => teamSum + group.members.length,
      0,
    );
    return sum + membersInProject;
  }, 0);

  const liveApps = projects.filter((project) =>
    project.links.some((link) => link.label.toLowerCase().includes("website")),
  ).length;

  const stats = [
    { target: projects.length, suffix: "", label: "Projects" },
    { target: totalContributors, suffix: "+", label: "Contributors" },
    { target: liveApps, suffix: "", label: "Live Apps" },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);
  const hasAnimated = useRef(false);
  const statsRef = useRef(stats);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1400;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(statsRef.current.map((s) => Math.round(s.target * eased)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="projects" className="bg-black text-white">
      <style>{PROJECTS_HERO_STYLES}</style>
      {/* Hero Section */}
      <section className="relative pt-32 pb-34 px-6 overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row pointer-events-none">
          <img
            src={projectPageHeaderBackground}
            alt="Project Page Header Background"
            className="w-full lg:w-1/2 h-1/2 lg:h-full object-cover object-center opacity-70"
          />
          <img
            src={projectPageHeaderBackground2}
            alt="Project Page Header Background2"
            className="w-full lg:w-1/2 h-1/2 lg:h-full object-cover object-center opacity-70"
          />
        </div>
        {/* Scan line */}
        <div className="scan-line" />

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#34F5A3 1px, transparent 1px), linear-gradient(90deg, #34F5A3 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              opacity: 0.03,
            }}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#34F5A3]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative text-center">
          <HeroBadge label="featured_projects[]" className="pha1 mb-6" />

          <h1 className="pha2 text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none">
            Our{" "}
            <span
              className="text-[#34F5A3]"
              style={{ textShadow: "0 0 40px rgba(52,245,163,.35)" }}
            >
              Projects
            </span>
          </h1>

          <p className="pha3 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the applications, platforms and technical projects built by
            our community. Click any card to view the full tech stack, team, and
            project links. 🛠️
          </p>
        </div>
      </section>
      {/* Stats strip */}
      <div className="-mt-5 px-4 sm:px-8 md:px-14 lg:px-31">
        <div className="max-w-3xl mx-auto relative">
          {/* Ambient glow behind card */}
          <div className="absolute -inset-px rounded-[28px] bg-linear-to-r from-[#34F5A3]/20 via-[#34F5A3]/5 to-[#34F5A3]/20 blur-md pointer-events-none" />
          <div className="relative rounded-[28px] border border-white/10 bg-[#0b0b0b] backdrop-blur-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            {/* Top accent line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#34F5A3]/60 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group/stat relative py-7 sm:py-9 px-4 text-center cursor-default transition-all duration-300 hover:bg-[#34F5A3]/5 ${
                    index !== stats.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r sm:border-white/10"
                      : ""
                  }`}
                >
                  {/* Hover bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#34F5A3]/70 rounded-full transition-all duration-300 group-hover/stat:w-3/4" />
                  <p
                    className={`text-4xl md:text-5xl font-bold tracking-tight tabular-nums transition-colors duration-300 ${
                      stat.label === "Contributors"
                        ? "text-[#34F5A3]"
                        : "text-white group-hover/stat:text-[#34F5A3]"
                    }`}
                  >
                    {counts[index]}
                    {stat.suffix}
                  </p>
                  <p className="mt-2.5 text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 transition-colors duration-300 group-hover/stat:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Projects Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-[.2em]">
                  Projects
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-r from-white/8 to-transparent" />
              {/* Count reflects the filtered list (updates when the dropdown changes) */}
              <span className="text-xs font-mono text-gray-600">
                {renderProjects.length} projects
              </span>
            </div>

            {/* Year filter dropdown ("All Years" disables filtering) */}
            <div className="relative shrink-0">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-[#34F5A3]/6 border border-[#34F5A3]/45 hover:border-[#34F5A3]/70 text-white text-xs font-mono rounded-xl px-4 py-2.5 pr-9 cursor-pointer transition-colors focus:outline-none focus:border-[#34F5A3]/80 focus:ring-2 focus:ring-[#34F5A3]/25"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#34F5A3]/80 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Render the grid from the filtered list (changes when the year dropdown changes) */}
          <div className="grid lg:grid-cols-2 gap-10">
            {renderProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#121212] border border-gray-800 rounded-[28px] overflow-hidden hover:border-[#34F5A3]/50 hover:shadow-2xl hover:shadow-[#34F5A3]/10 transition-all duration-300 cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="relative h-72 md:h-80 bg-gradient-to-br from-[#34F5A3]/20 to-[#34F5A3]/5 overflow-hidden">
                  {project.imageType === "image" ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      autoPlay
                      loop
                      playsInline
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full border border-[#34F5A3]/30 font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl mb-3 flex items-center gap-3">
                    {project.title}
                    <span className="text-2xl">{project.emoji}</span>
                  </h3>

                  <p className="text-gray-400 text-base leading-7 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {getTechnologyValues(project.technologies)
                      .flat()
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-[#34F5A3]/10 text-[#34F5A3] border border-[#34F5A3]/20"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <button
                    className="w-full px-5 py-3 bg-[#34F5A3]/10 text-[#34F5A3] rounded-xl hover:bg-[#34F5A3]/20 transition-all text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                  >
                    View Full Project Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="px-6 pb-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-4 items-stretch">
            {/* Portrait image */}
            <div className="lg:w-72 xl:w-80 shrink-0 rounded-2xl overflow-hidden">
              <img
                src={projectsBanner}
                alt="CSS project members"
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a0a] px-8 py-10 lg:px-12 lg:py-14 flex flex-col justify-between">
              <p className="text-[#34F5A3] text-xs font-mono uppercase tracking-[0.2em]">
                CS Society — Cal Poly Pomona
              </p>

              <div>
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.0] tracking-tight text-white mt-6">
                  Built by
                  <br />
                  students,
                  <br />
                  <span className="text-[#34F5A3]">for students.</span>
                </h2>
                <p className="mt-6 text-gray-400 text-base leading-relaxed max-w-sm">
                  Real projects, real impact — built by CPP's students.
                </p>
              </div>

              <p className="text-white/20 text-xs tracking-widest uppercase mt-8">
                cppcss
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={closeProject}
        backdropClassName="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      />
    </section>
  );
};
