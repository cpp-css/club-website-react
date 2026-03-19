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
import type { CSSProperties } from "react";
import type {
  Project,
  ProjectLinkIcon,
  ProjectTechnologies,
} from "../../data/projectsData";
import { ModalShell } from "./ModalShell";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  backdropClassName?: string;
  backdropStyle?: CSSProperties;
  dialogClassName?: string;
}

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

export function ProjectDetailsModal({
  project,
  onClose,
  backdropClassName,
  backdropStyle,
  dialogClassName,
}: ProjectDetailsModalProps) {
  if (!project) {
    return null;
  }

  return (
    <ModalShell
      onClose={onClose}
      backdropClassName={backdropClassName}
      backdropStyle={backdropStyle}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#34F5A3]/20 rounded-[28px] shadow-2xl ${dialogClassName ?? ""}`.trim()}
      >
        <button
          type="button"
          onClick={onClose}
          className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="px-6 md:px-10 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
                {project.imageType === "image" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[260px] md:h-[340px] object-cover"
                  />
                ) : (
                  <video
                    className="w-full h-[260px] md:h-[340px] object-cover"
                    controls
                  >
                    <source src={project.image} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
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
                  {project.category}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl mb-4 flex items-center gap-3">
                {project.title}
                <span>{project.emoji}</span>
              </h2>

              <p className="text-gray-300 leading-7 text-base mb-8">
                {project.fullDescription}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#34F5A3]">
                    <FolderKanban className="w-5 h-5" />
                    Technologies
                  </h3>

                  <div className="space-y-4">
                    {getTechnologyEntries(project.technologies).map(
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
                    {project.team.map((group) => (
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
                              <span key={member.name} className="text-gray-300">
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
                      <span className="text-sm font-semibold">Frontend</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {project.technologies.frontend
                        ? project.technologies.frontend.join(", ")
                        : "Included in full stack"}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#34F5A3]/10 border border-[#34F5A3]/20">
                    <div className="flex items-center gap-2 text-[#34F5A3] mb-2">
                      <Server className="w-4 h-4" />
                      <span className="text-sm font-semibold">Backend</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {project.technologies.backend
                        ? project.technologies.backend.join(", ")
                        : project.technologies.libraries
                          ? project.technologies.libraries.join(", ")
                          : "See project details"}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#34F5A3]/10 border border-[#34F5A3]/20">
                    <div className="flex items-center gap-2 text-[#34F5A3] mb-2">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-semibold">Services</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {project.technologies.services
                        ? project.technologies.services.join(", ")
                        : project.technologies.tools
                          ? project.technologies.tools.join(", ")
                          : "Project-based tools"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalShell>
  );
}