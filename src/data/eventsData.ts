export interface EventItem {
  id: string;
  title: string;
  description: string;
  flyer?: string;
  date: string;
  semester: string; // "Fall 2025", "Spring 2026", etc.
  category: string; // Hackathons, Workshops, Speaker Events, etc.
}

export const eventsData: EventItem[] = [
  {
    id: "broncohacks2026",
    title: "BroncoHacks Hackathon",
    description: "WIP",
    flyer: "/src/assets/events/broncohacks.png",
    date: "March 2026",
    semester: "Spring 2026",
    category: "Hackathons",
  },
  {
    id: "csspi2025",
    title: "Computer Science Society Project Initiative (CSSPI)",
    description:
      "WIP",
    flyer: "/src/assets/events/csspi.png",
    date: "October 2025",
    semester: "Fall 2025",
    category: "Projects",
  },
  {
    id: "webdesign2025",
    title: "Web Design Workshop",
    description:"WIP",
    date: "November 2025",
    semester: "Fall 2025",
    category: "Workshops",
  },
  {
    id: "speaker2026",
    title: "Guest Speaker Series",
    description: "WIP",
    date: "April 2026",
    semester: "Spring 2026",
    category: "Speaker Events",
  },
];
