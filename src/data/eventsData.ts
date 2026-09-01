// webp for better optimization
// 2026 event flyers
import gitGithubWorkshop2026 from "../assets/eventFlyers/GitGitHubWorkshop.webp";
import firstGenMeeting2026 from "../assets/eventFlyers/firstGenMeeting2026.webp";
import broncoHacks2026 from "../assets/eventFlyers/BroncoHacks2026.webp";
import speaker1Lucero2026 from "../assets/eventFlyers/s26speaker1.webp";
import speaker2Tony2026 from "../assets/eventFlyers/s26speaker2.webp";
import speaker3Tony2026 from "../assets/eventFlyers/s26speaker3.webp";
import speaker42026 from "../assets/eventFlyers/s26speaker4.webp";

// 2025 event flyers
import winterSocial2025 from "../assets/eventFlyers/CSWinterWonderLand2025.webp";
import introWebSec2025 from "../assets/eventFlyers/IntroWebSec2025.webp";
import sqlWorkshop2025 from "../assets/eventFlyers/SQLWorkshop2025.webp";
import halloweenSocial2025 from "../assets/eventFlyers/HalloweenSocial2025.webp";
import dockerWorkshop2025 from "../assets/eventFlyers/DockerWorkshop2025.webp";
import offensiveWebSec2025 from "../assets/eventFlyers/OffensiveWebSec2025.webp";
import gitWorkshop2025 from "../assets/eventFlyers/GitWorkshop2025.webp";
import resumeWorkshop2025 from "../assets/eventFlyers/ResumeWorkshop2025.webp";
import kyleSpeaker2025 from "../assets/eventFlyers/MetaKyleGuestSpeaker2025.webp";
import dexterSpeaker2025 from "../assets/eventFlyers/MetaDexterGuestSpeaker2025.webp";
import aaronSpeaker2025 from "../assets/eventFlyers/JPLAaronGuestSpeaker2025.webp";
import firstMeeting2025 from "../assets/eventFlyers/FirstGenMeeting2025.webp";

export interface EventItem {
  id: string;
  title: string;
  speaker?: string;
  url?: string;
  description: string;
  flyer?: string;
  dateISO: string;
  displayDate: string;
  semester: string; // "Fall 2025", "Spring 2026", etc.
  category: string; // Hackathons, Workshops, Speaker Events, etc.
}

export const eventsData: EventItem[] = [
  // Add events with flyers here
  {
    id: "gitGithubMeeting2026",
    title: "Introduction to Git + Github Workshop",
    speaker: "Caleb Szeto (CSS)",
    description:
      "Join us this Thursday for an Intro to Git + GitHub Workshop with Caleb Szeto, our Hackathon Co-Chair! Whether you’re completely new to version control or just want to strengthen your Git skills, this workshop will cover the fundamentals you need to start collaborating on projects with confidence. Come learn the tools that developers use every day and get a foundation you can take into your next project!",
    flyer: gitGithubWorkshop2026,
    dateISO: "2026-09-03",
    displayDate: "2026-09-03",
    semester: "Fall 2026",
    category: "Workshops",
  },
  {
    id: "firstGenMeeting2026",
    title: "First General Meeting of Fall 2026",
    description:
      "Join the Computer Science Society for our first general meeting of the semester! Meet the CSS community, learn about upcoming workshops, mentorship, project opportunities, hackathons, socials, and more, and find out how you can get involved this semester.",
    flyer: firstGenMeeting2026,
    dateISO: "2026-08-27",
    displayDate: "2026-08-27",
    semester: "Fall 2026",
    category: "General Meetings",
  },
  {
    id: "broncohacks2026",
    title: "BroncoHacks Hackathon",
    url: "https://www.broncohacks.org/",
    description:
      "This is a 24 hour, in-person hackathon affiliated with Major League Hacking (MLH), the official student hackathon league. Participation is completely free! The event is open to students of all majors, featuring competition tracks of various disciplines. We especially encourage engineering students to participate, as there will be a dedicated hardware prize. Whether you’re a seasoned developer or a complete beginner with no coding experience, join us for workshops, free food, and hacking! More details and the registration form can be found on https://www.broncohacks.org/ or click the LINK pill.",
    flyer: broncoHacks2026,
    dateISO: "2026-04-25",
    displayDate: "2026-04-25",
    semester: "Spring 2026",
    category: "Hackathons",
  },
  {
    id: "speaker42026",
    title: "Introduction to Linux Desktop",
    speaker: "Minh Khoi Tran (Google)",
    description:
      "In Collaboration with SEA for An Introduction to Linux Desktop for CS Students with Minh Khoi Tran, an incoming Google SWE! Learn all about Linux, the free Open-Source Operating System made for Software Engineers! Learning Linux is crucial for building a high-demand, versatile career (covering cloud, DevOps, and security) and provides superior system control, stability, and security.",
    flyer: speaker42026,
    dateISO: "2026-02-26",
    displayDate: "2026-02-26",
    semester: "Spring 2026",
    category: "Speaker Events",
  },
  {
    id: "speaker3tony2026",
    title: "Bug Bounty Hunting",
    speaker: "Tony Tong (CSS)",
    description:
      "We met with our Events & Outreach Chair, Tony Tong, to build on our previous session on web caches and dive into bug bounty hunting. We discussed what bug bounty programs are and how real-world vulnerabilities are discovered and responsibly reported",
    flyer: speaker3Tony2026,
    dateISO: "2026-02-19",
    displayDate: "2026-02-19",
    semester: "Spring 2026",
    category: "Speaker Events",
  },
  {
    id: "speaker2tony2026",
    title: "Web Caches & Misconfigurations",
    speaker: "Tony Tong (CSS)",
    description:
      "Interested in learning about web technologies, attendees joined us for a session led by Events & Outreach Chair Tony Tong, who introduced web caches and how they work. The session then explored common web cache misconfigurations and demonstrated how these vulnerabilities can be identified and exploited.",
    flyer: speaker2Tony2026,
    dateISO: "2026-02-12",
    displayDate: "2026-02-12",
    semester: "Spring 2026",
    category: "Speaker Events",
  },
  {
    id: "speaker1lucero2026",
    title: "Accessible Systems Programming",
    speaker: "Crisrael Lucero (Google)",
    description:
      "We hosted Crisrael Lucero, Software Engineer at Google and former JPL intern, for a talk on the importance of accessible systems programming. He shared insights from his industry experience, discussed real-world systems applications, and highlighted why accessibility matters at every level of software development",
    flyer: speaker1Lucero2026,
    dateISO: "2026-02-05",
    displayDate: "2026-02-05",
    semester: "Spring 2026",
    category: "Speaker Events",
  },
  {
    id: "wintersocial2025",
    title: "Winter Social",
    description:
      "CSS, along with other CS clubs on campus, hosted CS Winter Wonderland, where attendees connected and socialized with fellow peers while enjoying fun activities, movies, games, and holiday cheer!",
    flyer: winterSocial2025,
    dateISO: "2025-12-01",
    displayDate: "December 2025",
    semester: "Fall 2025",
    category: "Socials",
  },
  {
    id: "introwebsec2025",
    title: "Introduction to Web Security Workshop",
    description:
      "This workshop covered core web security concepts, common website vulnerabilities, and how attackers exploit them. Participants gained insight into real-world attack techniques and best practices for building more secure web applications.",
    flyer: introWebSec2025,
    dateISO: "2025-11-01",
    displayDate: "November 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "sqlworkshop2025",
    title: "SQL Workshop",
    description:
      "CSS, in collaboration with DSAI and MISSA, hosted an interactive SQL Workshop where participants learned database fundamentals, explored SQL vs. NoSQL, practiced essential SQL syntax, and set up a local SQL environment. Attendees followed along hands-on and enjoyed drink samples from Teaspoon in Chino.",
    flyer: sqlWorkshop2025,
    dateISO: "2025-11-01",
    displayDate: "November 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "halloweenSocial2025",
    title: "Halloween Social",
    description:
      "CSS collaborated with DS&AI, FAST, sheCodes, MISSA, and other tech clubs on campus to host a spooky Halloween social. The event featured food, games, a photo booth, pumpkin carving, a costume contest, and plenty of other Halloween activities.",
    flyer: halloweenSocial2025,
    dateISO: "2025-10-01",
    displayDate: "October 2025",
    semester: "Fall 2025",
    category: "Socials",
  },
  {
    id: "dockerworkshop2025",
    title: "Docker Workshop",
    description:
      "CSS held a hands-on Docker Workshop where participants learned how Docker is used to build, deploy, and run applications in containers. The session covered core Docker concepts, practical tips, and guided attendees through creating their own containerized application.",
    flyer: dockerWorkshop2025,
    dateISO: "2025-10-01",
    displayDate: "October 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "offensivewebsec2025",
    title: "Offensive Web Security Workshop",
    description:
      "CSS held an Offensive Web Security Workshop where participants explored common website attack methods, examined real-world examples, and learned best practices for testing and strengthening web application security.",
    flyer: offensiveWebSec2025,
    dateISO: "2025-10-01",
    displayDate: "October 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "gitworkshop2025",
    title: "Git Workshop",
    description:
      "Git Workshop with CSS! Learn how to use Git to track changes, collaborate with others, and keep your projects organized. We'll walk through the basics, share tips and best practices, and build your general knowledge with Git. This is a great opportunity to learn practical skills you'll use in real projects. Don't miss out!",
    flyer: gitWorkshop2025,
    dateISO: "2025-10-01",
    displayDate: "October 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "resumeworkshop2025",
    title: "Resume Workshop",
    description:
      "Resume Workshop with CSS! We'll cover tips, strategies, and best practices to help you create a strong, professional resume that stands out to companies. This is a great opportunity to polish your resume, ask questions, and get feedback on your own resume. Don't miss out!",
    flyer: resumeWorkshop2025,
    dateISO: "2025-09-01",
    displayDate: "September 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "kylespeaker2025",
    title: "AI Infrastructure at Meta",
    speaker: "Kyle Ah-Tye (Meta)",
    description:
      "CSS hosted Kyle Ah-Tye, software engineer at Meta, who shared his journey in tech and insights on building the AI infrastructure that powers Meta’s models. Attendees had the chance to ask questions and hear his experience firsthand!",
    flyer: kyleSpeaker2025,
    dateISO: "2025-09-01",
    displayDate: "September 2025",
    semester: "Fall 2025",
    category: "Speaker Events",
  },
  {
    id: "dexterspeaker2025",
    title: "Ads Infrastructure at Meta",
    speaker: "Dexter Nguyen (Meta)",
    description:
      "CSS hosted Dexter Nguyen, software engineer at Meta, who discussed his path into tech and the skills needed to work at companies like Meta. He shared insights on his work in monetization and ads infrastructure, providing practical advice for attendees.",
    flyer: dexterSpeaker2025,
    dateISO: "2025-09-01",
    displayDate: "September 2025",
    semester: "Fall 2025",
    category: "Speaker Events",
  },
  {
    id: "aaronspeaker2025",
    title: "Internships at JPL (Q&A)",
    speaker: "Aaron Levitt (JPL)",
    description:
      "CSS hosted Aaron Levitt, software systems engineer at JPL, who shared his experience at JPL, insights on the recruitment process, and answered questions about internships.",
    flyer: aaronSpeaker2025,
    dateISO: "2025-09-01",
    displayDate: "September 2025",
    semester: "Fall 2025",
    category: "Speaker Events",
  },
  {
    id: "firstmeeting2025",
    title: "First General Meeting of Fall 2025",
    description:
      "CSS held its first general meeting of the semester, introducing this year’s e-board, sharing the club’s mission, and highlighting what CSS has to offer.",
    flyer: firstMeeting2025,
    dateISO: "2025-08-01",
    displayDate: "August 2025",
    semester: "Fall 2025",
    category: "General Meetings",
  },
];
