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
	const officers = showCurrent ? currentOfficers : formerBoard;

	return (
		<section id="e-board">
			<h1 className="desktop-e-board-title">MEET OUR E-BOARD</h1>

			<div className="e-board-toggle">
				<button
					className={showCurrent ? "active" : ""}
					onClick={() => {
						setShowCurrent(true);
						setActive(0);
					}}
				>
					Current Board
				</button>

				<button
					className={!showCurrent ? "active" : ""}
					onClick={() => {
						setShowCurrent(false);
						setActive(0);
					}}
				>
					Former Board
				</button>
			</div>
			{/* Active member display */}
			<div className="e-board-active">
				<img
					src={officers[active].img}
					alt={officers[active].name}
					className="e-board-active-img"
				/>
				<div className="e-board-active-info">
					<h2>{officers[active].name}</h2>
					<h4>{officers[active].title}</h4>

					<div className="e-board-socials">
						{officers[active].github ? (
							<a
								href={officers[active].github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={githubIcon} alt="GitHub" />
							</a>
						) : (
							<img src={githubIcon} alt="GitHub disabled" className="disabled" />
						)}
						{officers[active].linkedin ? (
							<a
								href={officers[active].linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={linkedinIcon} alt="LinkedIn" />
							</a>
						) : (
							<img
								src={linkedinIcon}
								alt="LinkedIn disabled"
								className="disabled"
							/>
						)}
					</div>
					<p>{officers[active].desc}</p>
				</div>
			</div>

			{/* Thumbnail row */}
			<div className="e-board-thumbnails">
				{officers.map((officer, i) => (
					<img
						key={i}
						src={officer.img}
						alt={officer.name}
						className={`e-board-thumbnail ${
							active === i ? "active" : ""
						}`}
						onClick={() => setActive(i)}
					/>
				))}
			</div>
		</section>
	);
};