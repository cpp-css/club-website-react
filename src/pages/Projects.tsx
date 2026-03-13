import { useState, useEffect, useRef } from "react";

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
import {
  X,
  ExternalLink,
  Github,
  Users,
  Code2,
  Server,
  Globe,
  FolderKanban,
} from "lucide-react";

import projectsBanner from "../assets/11377175_10203435304518305_4965010383617393659_n.jpg";
import projectPageHeaderBackground from "../assets/redesignPhotos/ProjectPageHeaderBackground.png";
import projectPageHeaderBackground2 from "../assets/redesignPhotos/ProjectPageHeader2.png";
import {
  projectsData,
  type Project,
  type ProjectLinkIcon,
  type ProjectTechnologies,
} from "../data/projectsData";

const getTechnologyValues = (technologies: ProjectTechnologies) =>
  Object.values(technologies).filter((value): value is string[] =>
    Array.isArray(value),
  );

const getTechnologyEntries = (technologies: ProjectTechnologies) =>
  Object.entries(technologies).filter((entry): entry is [string, string[]] =>
    Array.isArray(entry[1]),
  );

const renderProjectLinkIcon = (icon: ProjectLinkIcon) => {
  if (icon === "github") {
    return <Github className="w-4 h-4" />;
  }

  return <ExternalLink className="w-4 h-4" />;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = projectsData;

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

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
        <div className="absolute inset-0 z-0 flex">
          <img
            src={projectPageHeaderBackground}
            alt="Project Page Header Background"
            className="w-188 h-120 object-cover opacity-70"
          />
          <img
            src={projectPageHeaderBackground2}
            alt="Project Page Header Background2"
            className="w-190 h-120 object-cover opacity-70"
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
          <div className="pha1 inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/25 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34F5A3] inline-block" />
            <span className="text-sm text-[#34F5A3] font-mono tracking-wide">
              featured_projects[]
            </span>
          </div>

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
            Explore the platforms, applications, and technical projects built by
            our community. Click any card to view the full tech stack, team, and
            project links.
          </p>
        </div>
      </section>
      {/* Stats strip */}
      <div className="-mt-5 px-31">
        <div className="max-w-3xl mx-auto relative">
          {/* Ambient glow behind card */}
          <div className="absolute -inset-px rounded-[28px] bg-linear-to-r from-[#34F5A3]/20 via-[#34F5A3]/5 to-[#34F5A3]/20 blur-md pointer-events-none" />
          <div className="relative rounded-[28px] border border-white/10 bg-[#0b0b0b] backdrop-blur-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            {/* Top accent line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#34F5A3]/60 to-transparent" />
            <div className="grid grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group/stat relative py-9 px-4 text-center cursor-default transition-all duration-300 hover:bg-[#34F5A3]/5 ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
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
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project) => (
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
          <div className="relative rounded-[28px] overflow-hidden border border-white/10">
            <img
              src={projectsBanner}
              alt="Project Banner"
              className="w-full h-[280px] md:h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <h2 className="text-3xl md:text-5xl mb-4">
                  Built by students, for students
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  From hackathon platforms to research projects, our work
                  reflects collaboration, creativity, and technical growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#34F5A3]/20 rounded-[28px] shadow-2xl">
            <button
              onClick={closeProject}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="px-6 md:px-10 pb-10">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
                    {selectedProject.imageType === "image" ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-[260px] md:h-[340px] object-cover"
                      />
                    ) : (
                      <video
                        className="w-full h-[260px] md:h-[340px] object-cover"
                        controls
                      >
                        <source src={selectedProject.image} type="video/mp4" />
                      </video>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#34F5A3] text-black font-semibold hover:bg-[#2de091] transition"
                      >
                        {renderProjectLinkIcon(link.icon)}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg mb-4">
                    <span className="text-sm text-[#34F5A3] font-mono">
                      {selectedProject.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl mb-4 flex items-center gap-3">
                    {selectedProject.title}
                    <span>{selectedProject.emoji}</span>
                  </h2>

                  <p className="text-gray-300 leading-7 text-base mb-8">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#34F5A3]">
                        <FolderKanban className="w-5 h-5" />
                        Technologies
                      </h3>

                      <div className="space-y-4">
                        {getTechnologyEntries(selectedProject.technologies).map(
                          ([key, values]) => (
                            <div key={key}>
                              <p className="text-white font-medium capitalize mb-2">
                                {key}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {values.map((value) => (
                                  <span
                                    key={value}
                                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                                  >
                                    {value}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#34F5A3]">
                        <Users className="w-5 h-5" />
                        Team
                      </h3>

                      <div className="space-y-5">
                        {selectedProject.team.map((group) => (
                          <div
                            key={group.role}
                            className="p-4 rounded-2xl bg-white/5 border border-white/10"
                          >
                            <p className="text-white font-semibold mb-3">
                              {group.role}
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                              {group.members.map((member) =>
                                member.linkedin ? (
                                  <a
                                    key={member.name}
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-300 underline underline-offset-4 hover:text-[#34F5A3] transition"
                                  >
                                    {member.name}
                                  </a>
                                ) : (
                                  <span
                                    key={member.name}
                                    className="text-gray-300"
                                  >
                                    {member.name}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-[#34F5A3]/10 border border-[#34F5A3]/20">
                        <div className="flex items-center gap-2 text-[#34F5A3] mb-2">
                          <Code2 className="w-4 h-4" />
                          <span className="text-sm font-semibold">
                            Frontend
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">
                          {selectedProject.technologies.frontend
                            ? selectedProject.technologies.frontend.join(", ")
                            : "Included in full stack"}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#34F5A3]/10 border border-[#34F5A3]/20">
                        <div className="flex items-center gap-2 text-[#34F5A3] mb-2">
                          <Server className="w-4 h-4" />
                          <span className="text-sm font-semibold">Backend</span>
                        </div>
                        <p className="text-sm text-gray-300">
                          {selectedProject.technologies.backend
                            ? selectedProject.technologies.backend.join(", ")
                            : selectedProject.technologies.libraries
                              ? selectedProject.technologies.libraries.join(
                                  ", ",
                                )
                              : "See project details"}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#34F5A3]/10 border border-[#34F5A3]/20">
                        <div className="flex items-center gap-2 text-[#34F5A3] mb-2">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm font-semibold">
                            Services
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">
                          {selectedProject.technologies.services
                            ? selectedProject.technologies.services.join(", ")
                            : selectedProject.technologies.tools
                              ? selectedProject.technologies.tools.join(", ")
                              : "Project-based tools"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={closeProject}
            className="absolute inset-0 -z-10 cursor-default"
            aria-label="Close modal backdrop"
          />
        </div>
      )}
    </section>
  );
};
