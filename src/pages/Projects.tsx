import { useState, useEffect, useRef } from "react";
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

import broncoBondImg from "../assets/broncobond.png";
import broncoHacksSiteImg from "../assets/broncoHacks2025.png";
import broncoPortalImg from "../assets/broncoHacksApplicationPortal2025.png";
import mlVideo from "../assets/videos/ML-project.mov";
import projectsBanner from "../assets/11377175_10203435304518305_4965010383617393659_n.jpg";
import projectPageHeaderBackground from "../assets/redesignPhotos/ProjectPageHeaderBackground.png";
import projectPageHeaderBackground2 from "../assets/redesignPhotos/ProjectPageHeader2.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Bronco Bond",
      category: "Mobile App",
      emoji: "📱",
      description:
        "BroncoBond is a student networking app designed to help Cal Poly Pomona students uncover people, places, programs, and events associated with CPP.",
      fullDescription:
        "BroncoBond is a student networking app designed to help Cal Poly Pomona students uncover people, places, programs, and events associated with CPP. The app offers a solution to the difficulty students face in fully utilizing CPP’s resources. By offering a streamlined platform that consolidates campus resources into one easy-to-use app, BroncoBond simplifies the process of connecting on campus.",
      image: broncoBondImg,
      imageType: "image",
      links: [
        {
          label: "View Website",
          href: "https://broncobond.com/",
          icon: <ExternalLink className="w-4 h-4" />,
        },
      ],
      technologies: {
        frontend: ["Flutter", "Dart"],
        backend: ["NodeJS", "ExpressJS", "MongoDB", "SocketIO"],
        services: ["AWS EC2", "Route53", "VPC"],
      },
      team: [
        {
          role: "Frontend",
          members: [
            {
              name: "Jacob Lembach",
              linkedin: "https://www.linkedin.com/in/jacob-lembach-a06166249/",
            },
            {
              name: "Allison Nguyen",
              linkedin: "https://www.linkedin.com/in/allison-nguyen-/",
            },
            {
              name: "Roven Rivera",
              linkedin: "https://www.linkedin.com/in/rovenrivera/",
            },
            {
              name: "Vivian Trieu",
              linkedin: "https://www.linkedin.com/in/vivian-dtrieu/",
            },
            {
              name: "Natasha Wong",
              linkedin: "https://www.linkedin.com/in/natasha-wong-marie/",
            },
          ],
        },
        {
          role: "Backend",
          members: [
            {
              name: "Jacob Alonzo",
              linkedin: "https://www.linkedin.com/in/jacpalonzo/",
            },
            {
              name: "Kelly Lwin",
              linkedin: "https://www.linkedin.com/in/phyu-lwin/",
            },
            {
              name: "Ryan Pham",
              linkedin: "https://www.linkedin.com/in/ryan-pham-0a1479268/",
            },
            {
              name: "Brandon Tseng",
              linkedin: "https://www.linkedin.com/in/bt7274/",
            },
          ],
        },
        {
          role: "UI/UX",
          members: [
            {
              name: "Tavina Chen",
              linkedin: "https://www.linkedin.com/in/tavina-chen/",
            },
            {
              name: "Jennifer Garcia",
              linkedin: "https://www.linkedin.com/in/jenexe/",
            },
            {
              name: "Stella Sinlao",
              linkedin: "https://www.linkedin.com/in/stella-sinlao/",
            },
            {
              name: "Javi Wu",
              linkedin: "https://www.linkedin.com/in/javi-wu-1056a12b6/",
            },
          ],
        },
        {
          role: "Project Lead",
          members: [
            {
              name: "Jayden Nguyen",
              linkedin: "https://www.linkedin.com/in/jaydenvinhnguyen/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Bronco Hacks Website",
      category: "Web Platform",
      emoji: "💻",
      description:
        "Website for BroncoHacks Hackathon @ CPP, used to display info about upcoming and previous hackathons.",
      fullDescription:
        "Website for BroncoHacks Hackathon @ CPP! This website is used to display information about the upcoming hackathons @ California State Polytechnic University, Pomona, as well as information about previous hackathons.",
      image: broncoHacksSiteImg,
      imageType: "image",
      links: [
        {
          label: "View Website",
          href: "https://www.broncohacks.org",
          icon: <ExternalLink className="w-4 h-4" />,
        },
        {
          label: "GitHub Repository",
          href: "https://github.com/BroncoHacks-Website/BroncoHacks-Website",
          icon: <Github className="w-4 h-4" />,
        },
      ],
      technologies: {
        stack: ["JavaScript", "HTML", "Tailwind CSS", "Figma", "Git", "GitHub"],
      },
      team: [
        {
          role: "Project Leads",
          members: [
            {
              name: "Christopher Lo",
              linkedin:
                "https://www.linkedin.com/in/christopher-j-lo?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADDC094BvO94gbKZ6Y3_-VOatXIz7hAjtJQ",
            },
            {
              name: "Justin Nguyen",
              linkedin:
                "https://www.linkedin.com/in/justin-mn?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADsXKfYB8UWKPdPIM9Hf78TQqT5y1Xz_f2A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BIcU78MuxRv2eJedQGPOf4Q%3D%3D",
            },
            {
              name: "Daniel Pasion",
              linkedin: "https://www.linkedin.com/in/danielpasion/",
            },
            {
              name: "Michael Wu",
              linkedin:
                "https://www.linkedin.com/in/michael-ml-wu?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEWZscMBfQ54IYozdR-EN4DipWAvwBOB0aw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BL2%2FfU1tjSoOAjG%2F6hI7KEQ%3D%3D",
            },
          ],
        },
        {
          role: "Developers",
          members: [
            {
              name: "Gerardo Solis",
              linkedin: "https://www.linkedin.com/in/gerardosolisit/",
            },
            {
              name: "Thomas Phao",
              linkedin: "https://www.linkedin.com/in/tommmyphao",
            },
            {
              name: "Jairus Legion",
              linkedin: "https://www.linkedin.com/in/jairuslegion/",
            },
            {
              name: "Rebecca Smith",
              linkedin: "https://www.linkedin.com/in/rebecca-l-smith-3075604/",
            },
            {
              name: "Rane Dy",
              linkedin: "https://www.linkedin.com/in/ranedy",
            },
            {
              name: "Armin Erika Polanco",
              linkedin: "https://www.linkedin.com/in/arminerika",
            },
            {
              name: "Maddie Issacs",
              linkedin: "https://www.linkedin.com/in/mmisaacs/",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Bronco Hacks Application Portal",
      category: "Full Stack App",
      emoji: "🚀",
      description:
        "Application portal for BroncoHacks where users can register, create or join teams, and connect with teammates.",
      fullDescription:
        "Application Portal to sign up for our BroncoHacks Hackathon @ CPP! This website is used to create or join teams for our Hackathons. This website also displays information of your current team members in order to easily connect with them.",
      image: broncoPortalImg,
      imageType: "image",
      links: [
        {
          label: "View Website",
          href: "https://www.broncohacksportal.org/",
          icon: <ExternalLink className="w-4 h-4" />,
        },
        {
          label: "GitHub Repository",
          href: "https://github.com/BroncoHacks-Website/BroncoHacks-Portal",
          icon: <Github className="w-4 h-4" />,
        },
      ],
      technologies: {
        frontend: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Git",
          "GitHub",
        ],
        backend: ["NodeJS", "Python Flask", "Sqlite"],
        services: ["Vercel", "Render", "Mailgun", "Squarespace"],
      },
      team: [
        {
          role: "Project Lead",
          members: [
            {
              name: "Daniel Pasion",
              linkedin: "https://www.linkedin.com/in/danielpasion/",
            },
          ],
        },
        {
          role: "Developers",
          members: [
            {
              name: "Nicholas Amancio",
              linkedin: "https://www.linkedin.com/in/nicholas-amancio/",
            },
            {
              name: "Caleb Chung",
              linkedin: "https://www.linkedin.com/in/caleb-k-chung-3774852a9/",
            },
            {
              name: "Cesar Henry dePaula",
              linkedin: "https://www.linkedin.com/in/cesarhenrydepaula",
            },
            {
              name: "Jade Nguyen",
              linkedin: "https://www.linkedin.com/in/jade-nguyen-52a591239/",
            },
            {
              name: "Tony Tong",
              linkedin: "https://www.linkedin.com/in/tony-tong-699631240/",
            },
            {
              name: "Justin Nguyen",
              linkedin: "https://www.linkedin.com/in/justin-mn/",
            },
            {
              name: "Tommy Phao",
              linkedin: "https://www.linkedin.com/in/thomasphao/",
            },
            {
              name: "Jayden Nguyen",
              linkedin: "https://www.linkedin.com/in/jaydenvinhnguyen/",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Exploring Machine Learning Models",
      category: "Research Project",
      emoji: "🤖",
      description:
        "A project exploring machine learning algorithms to predict salary and compare model effectiveness.",
      fullDescription:
        "We are a project team exploring various machine-learning algorithms. Our primary objective is to solve one problem: predicting an individual’s salary based on a set of variables. We analyze, compare, and contrast the models to understand which one is the most effective. After thorough analysis, we found that Linear Regression is the most optimal solution, offering greater accuracy and ease of use for programmers.",
      image: mlVideo,
      imageType: "video",
      links: [
        {
          label: "GitHub Repository",
          href: "https://github.com/CSS-Exploring-Machine-Learning-Models/Machine_Learning_Algorithms.git",
          icon: <Github className="w-4 h-4" />,
        },
      ],
      technologies: {
        libraries: [
          "Scikit-learn",
          "TensorFlow",
          "Seaborn",
          "Matplotlib",
          "Pandas",
          "NumPy",
        ],
        tools: ["Visual Studio Code", "Jupyter Notebook"],
      },
      team: [
        {
          role: "Project Lead",
          members: [
            {
              name: "Michelle Reyes",
              linkedin: "https://www.linkedin.com/in/michelle-reyes-5a9bb2246/",
            },
          ],
        },
        {
          role: "Members",
          members: [
            { name: "Megan Bee" },
            { name: "Michael Castillo" },
            {
              name: "Britney Collier",
              linkedin:
                "https://www.linkedin.com/in/britney-collier-1401602a7/",
            },
            { name: "Bijou Raj" },
            {
              name: "Nicholas Hoang",
              linkedin: "https://www.linkedin.com/in/nicholas-hoang-7b1644235/",
            },
            { name: "Hanmo Zhang" },
            {
              name: "Gabriel Robles",
              linkedin: "https://www.linkedin.com/in/gabrielrobles/",
            },
            { name: "Johnny Garcia" },
          ],
        },
      ],
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };
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

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1400;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(s.target * eased)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="projects" className="bg-black text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-34 px-6 overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 z-0 flex">
          <img
            src={projectPageHeaderBackground}
            alt="Project Page Header Background"
            className="w-188 h-120 object-cover opacity-30"
          />
          <img
            src={projectPageHeaderBackground2}
            alt="Project Page Header Background2"
            className="w-190 h-120 object-cover opacity-30"
          />
        </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-full mb-6">
            <span className="text-sm text-[#34F5A3] font-mono ">
              featured_projects[]
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Our <span className="text-[#34F5A3]">Projects</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                    {Object.values(project.technologies)
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
                        {link.icon}
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
                        {Object.entries(selectedProject.technologies).map(
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
