import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import '../styles/rootlayout.css'

import logo2025 from "../assets/logo_for_web_2_2025.png";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import youtubeIcon from "../assets/youtube.svg";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";

import { useEffect } from "react";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 300);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initialize on mount
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="root-layout-container">
        {/* Top horizontal navigation bar */}
        <nav className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            {/* Mobile hamburger menu */}
            <div
                className="main-hamburger-menu-container"
                onClick={() => setIsMenuOpen(true)}
            >
                <div className="hamburger-menu-line"></div>
                <div className="hamburger-menu-line"></div>
                <div className="hamburger-menu-line"></div>
            </div>

            {/* Navigation container */}
            <div className={isMenuOpen ? "main-navbar-container-active" : "main-navbar-container"}>
            {/* Exit button (mobile) */}
                <div
                    className="main-navigation-menu-exit-wrapper"
                    onClick={() => setIsMenuOpen(false)}
                >
                <CgClose className="main-navigation-menu-exit-icon" />
                </div>

                <div className="main-navigation-menu-exit-line-4"></div>
                { /* Navigation links  replace URL when github pages repo updated */}   
                <ul className="main-navbar">
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/e-board" onClick={() => setIsMenuOpen(false)}>E-Board</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    </li>
                    <li className="main-navbar-item">
                        <Link className="main-navbar-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
        {/* Footer */}
            <footer id='contact-us'>
                <div className='footer-container'>
                    <div className='social-stuff'>
                        <div className='email-container'>
                            <div className='logo-stuff'>
                                <img className='comp-sci-logo' src={logo2025} alt='CSS Logo' />
                            </div>
                            <ul>
                                <li className="email-container">
                                    <a href='mailto:css.cpp.edu@gmail.com' target='_blank' rel='noopener noreferrer'>
                                        <img className="email-icon" src={emailIcon} alt='email' />
                                    </a>
                                    <a className='socials-link' href="mailto:css.cpp.edu@gmail.com">
                                        css.cpp.edu@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='css-socials'>
                            <ul>
                                <li>STAY IN THE LOOP</li>
                                <li>
                                    <a href='https://www.instagram.com/cppcss/' target='_blank' rel='noopener noreferrer'>
                                        <img src={instagramIcon} alt='instagram' />
                                    </a>
                                    <a className='socials-link' href='https://www.instagram.com/cppcss/' target='_blank' rel='noopener noreferrer'>
                                        cppcss
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.facebook.com/groups/cppcss/' target='_blank' rel='noopener noreferrer'>
                                        <img src={facebookIcon} alt='facebook' />
                                    </a>
                                    <a className='socials-link' href='https://www.facebook.com/groups/cppcss/' target='_blank' rel='noopener noreferrer'>
                                        cppcss
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/channel/UC8sXz4RNrixxpLXBI56_jGw' target='_blank' rel='noopener noreferrer'>
                                        <img src={youtubeIcon} alt='youtube' />
                                    </a>
                                    <a className='socials-link' href='https://www.youtube.com/channel/UC8sXz4RNrixxpLXBI56_jGw' target='_blank' rel='noopener noreferrer'>
                                        Cal Poly Pomona - Computer Science Society
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/cpp-css' target='_blank' rel='noopener noreferrer'>
                                        <img src={githubIcon} alt='github' />
                                    </a>
                                    <a className='socials-link' href='https://github.com/cpp-css' target='_blank' rel='noopener noreferrer'>
                                        cpp-css
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='decoration-circle-container'>
                    <div className='circle decoration-circle size-small' id='footer-circle-4'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-5'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-6'></div>
                    <div className='circle decoration-circle size-medium' id='footer-circle-1'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-4'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-5'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-6'></div>
                    <div className='circle decoration-circle size-medium' id='footer-circle-2'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-4'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-5'></div>
                    <div className='circle decoration-circle size-small' id='footer-circle-6'></div>
                </div>
            </footer>
    </div>
    )
}
