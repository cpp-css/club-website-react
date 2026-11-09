import broncoBondImg from "../assets/projects/broncobond.png";
import broncoHacksSiteImg from "../assets/projects/broncoHacks2025.webp";
import broncoPortalImg from "../assets/projects/broncoHacksApplicationPortal2025.png";
import mlVideo from "../assets/projects/ML-project.mov";
import YSTEMProjImg from "../assets/projects/YSTEMProjImg.webp";
import gazeCardHeader from "../assets/projects/GazeCardHeader.webp";
import dsmlCardHeader from "../assets/projects/CSS-DSMLCardHeader.webp";
import cookieMonsterCardHeader from "../assets/projects/CookieMonsterCardHeader.webp";
import smartClockProjHeader from "../assets/projects/SmartClockProjHeader.webp";
import vyuhCardHeader from "../assets/projects/VYUHCardHeader.webp";
import broncoHacksPortal2027CardHeader from "../assets/projects/BroncoHacksPortal2027CardHeader.webp";

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
  {
    id: 6,
    title: "Gaze",
    category: "Computer Vision",
    year: "2026-present",
    emoji: "👁",
    description:
      "Gaze uses a Raspberry Pi 5 to recognize hand gestures when you face the camera, letting you control a light switch hands-free.",
    fullDescription:
      "Gaze uses computer vision to recognize hand gestures only when you face the camera. Looking away tells the system to ignore your gestures, which helps prevent accidental triggers during everyday movement. The prototype uses one camera and a small device that flips an existing light switch without rewiring. It offers hands-free control for people who find switches, phones, or voice commands hard to use. The team plans to add more gestures, support for curtains and doors, eye tracking, and an infrared camera for use in the dark.",
    image: gazeCardHeader,
    imageType: "image",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/CPP-CSSPI-VisionDev/Gaze",
        icon: "github",
      },
    ],
    technologies: {
      "Computer Vision": ["Python", "OpenCV", "MediaPipe"],
      Hardware: [
        "Raspberry Pi 5",
        "Raspberry Pi Camera Module 3",
        "ESP32",
        "Servo Motor",
      ],
      Embedded: ["C++", "Arduino IDE"],
      Design: ["Fusion 360"],
    },
    team: [
      {
        role: "Project Lead",
        members: [
          {
            name: "Tejas Jain",
            linkedin: "https://www.linkedin.com/in/tejasjainatwork/",
          },
        ],
      },
      {
        role: "Computer Vision Co-Lead",
        members: [
          {
            name: "Havish Karthick",
            linkedin: "https://www.linkedin.com/in/havish-karthick/",
          },
        ],
      },
      {
        role: "Electronics Co-Lead",
        members: [{ name: "Dean Triguero" }],
      },
      {
        role: "Computer Vision",
        members: [
          { name: "Kevin Phon" },
          { name: "Ryan Mora" },
          { name: "Lahari Gudimella" },
        ],
      },
      {
        role: "Electronics",
        members: [
          {
            name: "James Lents",
            linkedin: "https://www.linkedin.com/in/james-lents-39502b445/",
          },
          { name: "Neptune Castaneda" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "CSS-DSML",
    category: "DS / ML",
    year: "2026-present",
    emoji: "📊",
    description:
      "CSS-DSML is a semester-long project where students work in pairs to explore the MovieLens dataset using data science and machine learning.",
    fullDescription:
      "Students work in pairs to analyze MovieLens data with Python. They clean and prepare the data, engineer features, visualize patterns, and apply machine learning algorithms. By the end of the semester, each pair aims to have a project they can share on their résumés and experience applying core data science concepts together.",
    image: dsmlCardHeader,
    imageType: "image",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/XmanJL/css-dsml-fall2027",
        icon: "github",
      },
    ],
    technologies: {
      Libraries: ["pandas", "NumPy", "scikit-learn", "Matplotlib"],
      "Development Tools": [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "Jupyter Notebook",
        "Markdown",
      ],
    },
    team: [
      {
        role: "Project Lead",
        members: [
          {
            name: "Jasper Liu",
            linkedin: "https://www.linkedin.com/in/jasper-liu-a47a9024b/",
          },
        ],
      },
      {
        role: "Supervisor",
        members: [
          {
            name: "Liam Buck",
            linkedin: "https://www.linkedin.com/in/liam-buckman/",
          },
        ],
      },
      {
        role: "Members",
        members: [
          {
            name: "Hector Hernandez",
            linkedin: "https://www.linkedin.com/in/hector-hernandez-158738351/",
          },
          {
            name: "Timothy Cortez",
            linkedin: "https://www.linkedin.com/in/timothy-cortez-5411b4274/",
          },
          {
            name: "Kevin Phon",
            linkedin: "https://www.linkedin.com/in/kevin-phon-b64b422aa/",
          },
          {
            name: "Anden Beers",
            linkedin: "https://www.linkedin.com/in/anden-beers-a971093b5/",
          },
          {
            name: "Sarah Liu",
            linkedin: "https://www.linkedin.com/in/sarah-liuu/",
          },
          {
            name: "Katia Choi",
            linkedin: "https://www.linkedin.com/in/katia-c-326887141/",
          },
          {
            name: "MD Arif Arman",
            linkedin: "https://www.linkedin.com/in/md-arif-arman-894031368/",
          },
          {
            name: "Aaron Strong",
            linkedin: "https://www.linkedin.com/in/aaron-strong-778494414/",
          },
          {
            name: "Jessica Gonzalez",
            linkedin: "https://www.linkedin.com/in/jessicagonzalez02/",
          },
          {
            name: "Grecia Mendoza",
            linkedin: "https://www.linkedin.com/in/grecia-mendoza-b020b7370/",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "BroncoHacks Portal 2027",
    category: "Web Platform",
    year: "2026-present",
    emoji: "🐴",
    description:
      "This project aims to develop a registration portal for BroncoHacks, Cal Poly Pomona's annual student-run hackathon, to better organize teams, users, and submissions.",
    fullDescription:
      "BroncoHacks is a 24-hour event where students form teams of one to four members to develop projects around a yearly theme. The team is building a registration portal for the 2027 registration period to organize users, teams, and hackathon submissions.",
    image: broncoHacksPortal2027CardHeader,
    imageType: "image",
    links: [],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: [
        "Spring Boot",
        "Java",
        "Spring Security",
        "PostgreSQL",
        "Maven",
      ],
      services: ["GitHub Actions", "Docker"],
      Testing: ["Vitest", "JUnit 5"],
      Design: ["Figma"],
      "API Testing": ["Postman"],
    },
    team: [
      {
        role: "Project Lead",
        members: [
          {
            name: "Kyle Moreno",
            linkedin: "https://www.linkedin.com/in/kyle-moreno-6ab856302/",
          },
        ],
      },
      {
        role: "Backend",
        members: [
          {
            name: "Matthew Ponciano",
            linkedin: "https://www.linkedin.com/in/matthew-ponciano/",
          },
          {
            name: "Jose Godinez",
            linkedin: "https://www.linkedin.com/in/jose-godinez-948645314/",
          },
        ],
      },
      {
        role: "Full Stack",
        members: [
          {
            name: "Trung Tran",
            linkedin: "https://www.linkedin.com/in/trung-hh-tran/",
          },
          {
            name: "Thuy An Nguyen",
            linkedin: "https://www.linkedin.com/in/thuy-an-nguyen99/",
          },
        ],
      },
      {
        role: "UI/UX",
        members: [
          {
            name: "Shuvashree Basnet",
            linkedin: "https://www.linkedin.com/in/shuvashreebasnet/",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Cookie Monster",
    category: "DS / ML",
    year: "2026-present",
    emoji: "🍪",
    description:
      "Cookie Monster is a Firefox extension that compares actual HTTP cookie behavior against privacy policy claims.",
    fullDescription:
      "Privacy policies can be hard to understand. Cookie Monster helps Firefox users see whether the HTTP cookies a website sets match what its privacy policy says. The project aims to make data collection more transparent and hold companies accountable for their privacy commitments.",
    image: cookieMonsterCardHeader,
    imageType: "image",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/ClarenceBallensky/Cookie_Monster",
        icon: "github",
      },
    ],
    technologies: {
      frontend: ["Firefox", "WebExtensions API", "Manifest V3"],
      backend: ["FastAPI", "PostgreSQL"],
      "Machine Learning": ["Hugging Face Transformers"],
      "Data Science": ["pandas", "NumPy"],
    },
    team: [
      {
        role: "Project Lead",
        members: [
          {
            name: "Clarence Ballensky",
            linkedin:
              "https://www.linkedin.com/in/clarence-ballensky-a90442361/",
          },
        ],
      },
      {
        role: "Frontend",
        members: [
          {
            name: "Zuber Sandhu",
            linkedin: "https://www.linkedin.com/in/zubersandhu/",
          },
          {
            name: "Terrell Fontanilla",
            linkedin: "https://www.linkedin.com/in/terrell-f-4b28a4396/",
          },
        ],
      },
      {
        role: "Backend",
        members: [
          {
            name: "Logan Quon",
            linkedin: "https://www.linkedin.com/in/logan-quon/",
          },
        ],
      },
      {
        role: "Data Science",
        members: [
          {
            name: "Sergio Milian",
            linkedin: "https://www.linkedin.com/in/sergio-milian-8a0545292/",
          },
          {
            name: "Paolo Halog",
            linkedin: "https://www.linkedin.com/in/paolo-halog/",
          },
          {
            name: "Aaron Strong",
            linkedin: "https://www.linkedin.com/in/aaron-strong-778494414/",
          },
        ],
      },
      {
        role: "Machine Learning",
        members: [
          {
            name: "Vanessa Ramirez",
            linkedin: "https://www.linkedin.com/in/vanessairamirez/",
          },
          {
            name: "Youseff Garcia",
            linkedin: "https://www.linkedin.com/in/youseff-garcia/",
          },
          {
            name: "Jason Lin",
            linkedin: "https://www.linkedin.com/in/jasonrlin/",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "SmartClock AI (Workers Time Clock System)",
    category: "Full Stack App",
    year: "2026-present",
    emoji: "⏰",
    description:
      "SmartClock AI provides shift workers with a seamless, photo-free facial recognition clock-in kiosk while giving managers a real-time attendance dashboard.",
    fullDescription:
      "SmartClock AI is a touchless attendance system for small shift-based businesses such as restaurants, retail shops, and local warehouses. Employees can clock in through facial recognition instead of using paper timecards, PINs, or badges. The system converts facial features into mathematical embeddings and deletes raw images rather than saving photos. Managers can monitor attendance, review hours, and correct timecard mistakes before payroll. The Fall 2026 MVP is being developed locally, with smart shift scheduling and photo-spoofing protection planned for future updates.",
    image: smartClockProjHeader,
    imageType: "image",
    links: [],
    technologies: {
      frontend: ["React"],
      backend: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker"],
      services: ["GitHub"],
      "AI & Computer Vision": ["OpenCV", "DeepFace"],
      "Design & Project Management": ["Figma", "Asana"],
    },
    team: [
      {
        role: "Tech Lead / Full-Stack Lead",
        members: [
          {
            name: "Angel Raygoza",
            linkedin: "https://www.linkedin.com/in/angel-raygoza-bba85835a/",
          },
        ],
      },
      {
        role: "AI / Computer Vision Co-Lead",
        members: [
          {
            name: "Harry Lavine",
            linkedin: "https://www.linkedin.com/in/harry-lavine-427940431",
          },
        ],
      },
      {
        role: "Backend",
        members: [
          {
            name: "Howard",
            linkedin: "https://www.linkedin.com/in/chaoward/",
          },
        ],
      },
      {
        role: "Frontend",
        members: [
          {
            name: "Sivana Thilak",
            linkedin: "https://www.linkedin.com/in/sivana-thilak/",
          },
        ],
      },
      {
        role: "Data / QA & Project Operations",
        members: [
          {
            name: "Elvira Pineda",
            linkedin: "https://www.linkedin.com/in/elvira-p-67b416362/",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "VYUH Learning Intelligence",
    category: "Web Platform",
    year: "2026-present",
    emoji: "🎓",
    description:
      "VYUH Learning Intelligence is an AI-powered educational platform that helps students understand concepts and helps educators identify learning gaps.",
    fullDescription:
      "VYUH Learning Intelligence is an AI-powered educational platform designed to help teachers understand how students learn, not only how they score. Guided AI learning, Proof of Learning, and Learning MRI aim to identify misconceptions, track concept-level mastery, and give educators actionable insights. Through personalized interventions and teacher-controlled AI assistance, VYUH envisions a continuous feedback loop where students receive meaningful support and teachers can address learning gaps before exams.",
    image: vyuhCardHeader,
    imageType: "image",
    links: [
      {
        label: "View Website",
        href: "https://vyuhli.app/",
        icon: "external-link",
      },
      {
        label: "GitHub Organization",
        href: "https://github.com/VYUH-LI",
        icon: "github",
      },
    ],
    technologies: {
      frontend: ["React", "TypeScript", "HTML/CSS", "Vite", "JavaScript"],
      backend: ["Python", "FastAPI", "Supabase", "PostgreSQL"],
      services: ["DigitalOcean", "Name.com", "Resend", "GitHub"],
      "Version Control & Project Management": [
        "GitHub Issues",
        "GitHub Projects",
        "Git",
      ],
      Prototype: ["Base44"],
      "Development Tools": ["Visual Studio Code"],
    },
    team: [
      {
        role: "Project Lead / Frontend",
        members: [
          {
            name: "Gudimella Lahari",
            linkedin: "https://www.linkedin.com/in/lahari-glv/",
          },
        ],
      },
      {
        role: "Co-Lead / Backend",
        members: [
          {
            name: "Adi Levy",
            linkedin: "https://www.linkedin.com/in/adilevy07/",
          },
        ],
      },
      {
        role: "Frontend",
        members: [
          {
            name: "Julian Nava-Perez",
            linkedin: "https://www.linkedin.com/in/julian-nava-perez/",
          },
          {
            name: "Abraham Mourad",
            linkedin: "https://www.linkedin.com/in/abraham-mourad-00a430289/",
          },
          {
            name: "Havish Karthick",
            linkedin: "https://www.linkedin.com/in/havish-karthick/",
          },
          {
            name: "Clarence Mariano",
            linkedin: "https://www.linkedin.com/in/clarence-mariano-68b92132a/",
          },
        ],
      },
      {
        role: "Backend",
        members: [
          {
            name: "Ryan Mora",
            linkedin: "https://www.linkedin.com/in/ryan-mora-b78273338/",
          },
          {
            name: "Calvin Truong",
            linkedin: "https://www.linkedin.com/in/calvin-truong23/",
          },
          {
            name: "Kevin Phon",
            linkedin: "https://www.linkedin.com/in/kevin-phon-b64b422aa/",
          },
          {
            name: "Ahmed Elnaggar",
            linkedin: "https://www.linkedin.com/in/ahmedelnaggar04/",
          },
          {
            name: "Paolo Halog",
            linkedin: "https://www.linkedin.com/in/paolo-halog/",
          },
          {
            name: "Huy Nguyen",
            linkedin: "https://www.linkedin.com/in/huy-nguyen-376a4433b/",
          },
        ],
      },
    ],
  },
];
