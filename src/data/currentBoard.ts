import michaelImg from "../assets/boardMembers/michael.jpg";
import brandonImg from "../assets/boardMembers/Brandon.png";
import julianImg from "../assets/boardMembers/Julian.jpg";
import umarImg from "../assets/boardMembers/umar.png";
import michaelHImg from "../assets/boardMembers/michaelH.jpg";
import garrisonImg from "../assets/boardMembers/garisson.jpg";
import calebSImg from "../assets/boardMembers/calebS.jpg";
import jasperImg from "../assets/boardMembers/jasper.jpg";
import keerthiImg from "../assets/boardMembers/kee.jpg";
import elenaImg from "../assets/boardMembers/elena.jpeg";
import loganImg from "../assets/boardMembers/logan.jpg";
import liamImg from "../assets/boardMembers/liam.png";

export interface BoardMember {
  name: string;
  title: string;
  img: string;
  boardYear?: string;
  github?: string;
  linkedin?: string;
  desc: string;
}

export const currentBoard: BoardMember[] = [
  {
    name: "Michael",
    title: "President",
    img: michaelImg,
    github: "https://github.com/MichaelWuhu",
    linkedin: "https://www.linkedin.com/in/michael-ml-wu/",
    desc: "Hi! I'm Michael, a 4th year here at CPP, majoring in CS. Although my interest lies mainly in software engineering, I’m currently working full-time as a software QA engineer. In my free time, I enjoy traveling, gaming, and playing bass (I’m not good lmao). If you ever see me on campus, feel free to say hi!",
  },
  {
    name: "Michael H",
    title: "Internal Vice President",
    img: michaelHImg,
    github: "https://github.com/michaelhawara",
    linkedin: "https://www.linkedin.com/in/michaelhawara",
    desc: "Hi everyone, name is Michael and I’m a 4th year Computer Science major!! I specialize in AI/ML, and really enjoy attending conferences and hackathons. I’m also a crazy math nerd, so I’m minoring in Math and Cybersecurity. Outside school, I’m part of several nonprofits and church committees and love hiking. I love meeting people so if you see me walking around, don’t ever hesitate to say hi!! (I’m usually playing with a cool stick in my hand haha!!)",
  },
  {
    name: "Keerthi",
    title: "External VP + Google Tech Lead",
    img: keerthiImg,
    github: "https://github.com/keerthisreeram1",
    linkedin: "",
    desc: "Hi Im Keerthi Sreeram, a 4th year CS major. I'm currently a SWE intern at CSU Office of Chancellor and love to build funny and useful side projects in my free time. I love to explore books and nature spots for fun!",
  },
  {
    name: "Brandon",
    title: "Secretary",
    img: brandonImg,
    linkedin: "https://www.linkedin.com/in/bt7274/",
    desc: "Hallo, I am Brandon, serving as your secretary! I am a 4th year CS major interested in software/web development. Outside of CS, I enjoy taiko drumming, community work, and grinding The Finals. I also am a big fan of J-Rock, so please slide me recommendations! :D",
  },
  {
    name: "Julian",
    title: "Historian",
    img: julianImg,
    linkedin: "https://www.linkedin.com/in/julian-alfonso-41b707243/",
    desc: "Hello! I’m Julian, your historian for the 2026-27 school year. I’m a 4th year CS major interested in software and web development. Some things I love include fashion, anime/manga, good coffee, and discovering new music. One fun fact about me is I’m secretly a dinosaur nerd ^_^",
  },
  {
    name: "Umar",
    title: "Webmaster",
    img: umarImg,
    github: "https://github.com/Umar-Azizadah",
    linkedin: "https://www.linkedin.com/in/umar-azizadah-24578234b/",
    desc: "What's up! I'm Umar, a 3rd yr CS major at CPP and the Webmaster for CSS. I'm really interested in software engineering and backend development, and I enjoy building projects that combine both technical systems and creative design. In my free time I like going to cafes, hanging out with friends, and working on projects/ graphic design. I also am really into fashion and might be the biggest Lil Uzi Vert fan :3",
  },
  {
    name: "Garrison",
    title: "Treasure",
    img: garrisonImg,
    github: "",
    linkedin: "https://www.linkedin.com/in/garrison-g-9b0616330",
    desc: "Hello everyone, I am your treasurer for this term! My name is Garrison, and I'm a third year focused on software development. In my spare time I like biking, baking, hiking, and playing games. Feel free to say hi if you see me on campus!",
  },
  {
    name: "Jasper",
    title: "Data Science Team Lead",
    img: jasperImg,
    github: "",
    linkedin: "https://www.linkedin.com/in/jasper-liu-a47a9024b/",
    desc: "Hi there, my name is Jasper, a fourth year student. I am a former REU student at UT Austin and University of Rochester. My current research focus is ML/AI and HCI.",
  },
  {
    name: "Liam",
    title: "Project Chair",
    img: liamImg,
    github: "https://github.com/lebuckman",
    linkedin: "https://www.linkedin.com/in/liam-buckman/",
    desc: "Heyyo, I’m Liam! I’m a 4th year CS major and your Project Chair this year, helping connect members with student-led dev projects. On the dev side, I love web development and care a lot about UX and accessibility, always making sure things feel good to use. Outside of that, you’ll usually find me streaming music, binging dramas, or gaming online. I’m always down to chat or collaborate, so feel free to reach out with questions or recs :P",
  },
  {
    name: "Logan",
    title: "Co-Hackathon Chair",
    img: loganImg,
    github: "https://github.com/Grenrobotics",
    linkedin: "",
    desc: "Second year at CPP. Member of KHC and FAST. Had three CS internships at an internet hospitality company (Nomadix Inc. an ASSA ABLOY company). Interested in pursuing AI and Cybersecurity.",
  },
  {
    name: "Caleb S",
    title: "Co-Hackathon Chair",
    img: calebSImg,
    github: "https://github.com/CalebSzeto",
    linkedin: "https://www.linkedin.com/in/calebszeto/",
    desc: "I will be a fourth-year student, and I am interested in web development and backend.",
  },
  {
    name: "Elena",
    title: "Events Chair",
    img: elenaImg,
    github: "https://github.com/esorn01",
    linkedin:
      "https://www.google.com/url?q=http://www.linkedin.com/in/elenasorn&sa=D&source=docs&ust=1785035712586575&usg=AOvVaw3TnEZguheK1A12nC0mPcac",
    desc: "Senior CIS-Business Intelligence major. Interested in the intersection of technology, business, and innovation through large-scale collaborative projects.",
  },
];
