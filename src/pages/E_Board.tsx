import { useState } from "react";
import "../styles/e-board.css";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import jaydenImg from "../assets/jayden.jpg";
import michaelImg from "../assets/michael.jpg";
import brandonImg from "../assets/Brandon.png";
import jadeImg from "../assets/Jade.jpeg";
import julianImg from "../assets/Julian.jpg";
import allisonImg from "../assets/Allison.jpg";
import calebImg from "../assets/caleb.jpg";
import tonyImg from "../assets/tony.png";
import antonioImg from "../assets/Antonio.jpeg";

import { formerBoard } from "../data/formerBoard";

const EBOARD_STYLES = `
  @keyframes hero-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
  .ha1{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .1s both}
  .ha2{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .22s both}
  .ha3{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .34s both}
  @keyframes card-in{from{opacity:0;transform:scale(.97) translateY(16px)}to{opacity:1;transform:none}}
  .feat-in { animation: card-in .45s cubic-bezier(.16,1,.3,1) both; }
`;

const currentOfficers = [
  {
    name: "Jayden",
    title: "President",
    img: jaydenImg,
    github: "https://github.com/Jayvnn",
    linkedin: "https://www.linkedin.com/in/jayvn/",
    desc: "Hey everyone! I’m Jayden, a third-year Computer Science major. I’m passionate about becoming a full-stack developer because I love the process of creating complete applications from start to finish. Right now, I’m working on an exciting project called BroncoBond, a social media app designed to help guide students during their time at CPP. I’ll be leading CSS as president, and I’m really looking forward to meeting all of you at our socials!",
  },
  {
    name: "Michael",
    title: "Vice President",
    img: michaelImg,
    github: "https://github.com/MichaelWuhu",
    linkedin: "https://www.linkedin.com/in/michael-ml-wu/",
    desc: "Hi! I'm Michael, a 3rd year here at CPP, majoring in CS. Although my interest lies mainly in software engineering, I’m currently working full-time as a software QA engineer. In my free time, I enjoy traveling, gaming, and playing bass (I’m not good lmao). If you ever see me on campus, feel free to say hi!",
  },
  {
    name: "Brandon",
    title: "Secretary",
    img: brandonImg,
    linkedin: "https://www.linkedin.com/in/bt7274/",
    desc: "Hallo, I am Brandon, serving as your secretary! I am a 3rd year CS major interested in software/web development. Outside of CS, I enjoy taiko drumming, community work, and grinding The Finals. I also am a big fan of J-Rock, so please slide me recommendations! :D",
  },
  {
    name: "Jade",
    title: "Treasurer",
    img: jadeImg,
    linkedin: "https://www.linkedin.com/in/jade-nguyen-52a591239/",
    desc: "What’s up everyone! I’m Jade and I’ll be your treasurer for this term. I’m a 4th year CS major interested in web/game development. Some things I enjoy are crocheting, pokemon tcg, and coca-cola. I look forward to meeting you all!",
  },
  {
    name: "Julian",
    title: "Historian",
    img: julianImg,
    linkedin: "https://www.linkedin.com/in/julian-alfonso-41b707243/",
    desc: "Hello! I’m Julian, your historian for the 2025-26 school year. I’m a 3rd year CS major interested in software and web development. Some things I love include fashion, anime/manga, good coffee, and discovering new music. One fun fact about me is I’m secretly a dinosaur nerd ^_^",
  },
  {
    name: "Allison",
    title: "Mentorship Chair",
    img: allisonImg,
    linkedin: "https://www.linkedin.com/in/allison-nguyen-/",
    desc: "Hii, I’m Allison! I am a third-year student majoring in Computer Science. I am interested in software engineering and full-stack development. In my free time, I love snowboarding, playing tennis or pickleball, baking, and getting a good matcha. Don’t be a stranger and come say hi!",
  },
  {
    name: "Caleb",
    title: "Project Chair",
    img: calebImg,
    github: "https://github.com/TheBigTig24",
    linkedin: "https://www.linkedin.com/in/caleb-k-chung-3774852a9/",
    desc: "Hey guys! My name is Caleb Chung, I'm a 4th-year CS major at CPP, and I am this year's Project Chair. I am interested in and have fun working on full-stack web apps, specifically backend development. In my free time, I enjoy watching/playing basketball or just hanging out with friends in general, whether it be video games, golfing at the range, or just grabbing a drink and chatting. I'd love to meet more people, so please don't hesitate to say hi!",
  },
  {
    name: "Tony",
    title: "Events and Outreach Chair",
    img: tonyImg,
    github: "https://github.com/TonyTong112358",
    linkedin: "https://www.linkedin.com/in/tony-tong-699631240/",
    desc: "Hello! My name is Tony Tong, I am a 4th-year CS major at CPP, and I am the Social Outreach and Event planner. I primarily focus on backend development; however, I also do offensive web hacking. In my free time, I like to loiter around and talk to people, so if ever you see me, feel free to say hi, either in person or online. I also play League of Legends, but I strive to one day not. Overall, I look forward to planning some fun events and getting to know everyone better!",
  },
  {
    name: "Antonio",
    title: "Webmaster",
    img: antonioImg,
    github: "https://github.com/Antonioj562",
    linkedin: "https://www.linkedin.com/in/antonio-loyola97/",
    desc: "Hello there! I'm Antonio, I'm a 4th year CS major at CPP and the webmaster for CSS. I enjoy working on web based projects but I recently found that I enjoy working on backend software more. In my free time I play video games like league of legends or Warhammer. I look forward to meeting more people and understanding their journey in CS!",
  },
];

export const EBoard = () => {
  const [active, setActive] = useState(0);
  const [showCurrent, setShowCurrent] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const officers = showCurrent ? currentOfficers : formerBoard;
  const activeOfficer = officers[active];

  return (
    <>
      <style>{EBOARD_STYLES}</style>
      {/* Hero Section */}
      <section className="relative pt-32 pb-4 px-6 overflow-hidden bg-[#121212]">
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

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[#34F5A3]/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-full mb-6">
              <span className="text-sm text-[#34F5A3] font-mono">
                meet_the_team
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
              E-<span className="text-[#34F5A3]">Board</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate students leading CSS and making awesome things
              happen! 🌟
            </p>
          </div>
        </div>
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
              <div className="flex mb-6">
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
                  className="group flex flex-col items-center gap-3"
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
