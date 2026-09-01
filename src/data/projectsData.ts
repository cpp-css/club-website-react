import broncoBondImg from "../assets/broncobond.png";
import broncoHacksSiteImg from "../assets/broncoHacks2025.webp";
import broncoPortalImg from "../assets/broncoHacksApplicationPortal2025.png";
import mlVideo from "../assets/videos/ML-project.mov";
import YSTEMProjImg from "../assets/YSTEMProjImg.webp";

export type ProjectTechnologyKey =
  | "frontend"
  | "backend"
  | "services"
  | "stack"
  | "libraries"
  | "tools";

export type ProjectLinkIcon = "external-link" | "github";

export interface ProjectLink {
  label: string;
  href: string;
  icon: ProjectLinkIcon;
}

export interface ProjectMember {
  name: string;
  linkedin?: string;
}

export interface ProjectTeamGroup {
  role: string;
  members: ProjectMember[];
}

export type ProjectTechnologies = Partial<
  Record<ProjectTechnologyKey, string[]>
> & {
  [key: string]: string[] | undefined;
};

export interface Project {
  id: number;
  title: string;
  category: string;
  year?: string;
  emoji: string;
  description: string;
  fullDescription: string;
  image: string;
  imageType: "image" | "video";
  links: ProjectLink[];
  technologies: ProjectTechnologies;
  team: ProjectTeamGroup[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Bronco Bond",
    category: "Mobile App",
    year: "2023-present",
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
        icon: "external-link",
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
    year: "2024-present",
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
        icon: "external-link",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/BroncoHacks-Website/BroncoHacks-Website",
        icon: "github",
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
    year: "2024-2025",
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
        icon: "external-link",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/BroncoHacks-Website/BroncoHacks-Portal",
        icon: "github",
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
    year: "2024-2025",
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
        icon: "github",
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
            linkedin: "https://www.linkedin.com/in/britney-collier-1401602a7/",
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
  {
    id: 5,
    title: "Y STEM and Chess Mobile App",
    category: "Mobile App",
    year: "2026-present",
    emoji: "📱",
    description:
      "A cross-platform mobile application bringing Y STEM and Chess Inc's educational platform to Android and iOS.",
    fullDescription:
      "The Y STEM and Chess Mobile App is a cross-platform application being developed for Y STEM and Chess Inc., a nonprofit that teaches chess, math, and coding to underserved and at-risk youth. Built with React Native, Expo, and TypeScript, the app is designed to extend the existing web platform to mobile devices. Planned features include secure account access, guided chess lessons and puzzles, progress tracking, games against an adjustable computer opponent, and live chess experiences between students and mentors.",
    image: YSTEMProjImg,
    imageType: "image",
    links: [
      {
        label: "View Website",
        href: "https://ystemandchess.com/",
        icon: "external-link",
      },
      {
        label: "View GitHub",
        href: "https://github.com/YSTEMandChess/mobile",
        icon: "github",
      },
    ],
    technologies: {
      frontend: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Router",
        "TanStack Query",
      ],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Stockfish"],
      services: ["GitHub Actions", "Expo Application Services (EAS)"],
    },
    team: [
      {
        role: "Project Lead",
        members: [
          {
            name: "Umar Azizadah",
          },
        ],
      },
      {
        role: "Developers",
        members: [],
      },
    ],
  },
];
