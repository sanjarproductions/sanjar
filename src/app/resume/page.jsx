import React from 'react'
import "./resume.css"

import { FaFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Resume = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="flex">
                        <strong className="logo">sanjar.</strong>
                        <div className="links">
                            <a href="/resume">Resume</a>
                            <a href="/projects">Projects</a>
                            <a href="/blog">Blog</a>
                            <a href="/travel">Travel</a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="resume">
                <div className="container">
                    <h6>Sanjar Kamaliddinov</h6>
                    <div className="about flex">
                        <p>Frontend Developer</p>
                        <div className="links">
                            <a href="/resume.pdf" target="_blank" ><FaFilePdf /></a>
                            <a href="https://github.com/sanjarproductions" target="_blank" ><FaGithub /></a>
                            <a href="https://x.com/sanjarprod" target="_blank" ><FaXTwitter /></a>
                            <a href="https://www.linkedin.com/in/sanjarkamaliddinov/" target="_blank" ><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="desc">
                        <p>Have been coding for the last 3 years. Created 2 Startups, 3 web apps. Very good at
                            communicating with people, keen to learn and always improving myself</p>

                        <a href="mailto:sanjarkama26@gmail.com">Contact Me</a>
                    </div>
                    <div className="experiance">

                        <p className="sec-title">Experiance:</p>

                        <div className="job">
                            <p className="job-title">Intern Web Developer at SMMAK.uz</p>
                            <p className="job-date">Jun 2022- Sep 2022</p>
                            <p className="job-stack">Technologies: HTML, CSS, JavaScript, WordPress</p>
                            <ul>
                                <li>Build E-commerce website for ECO-ICE.uz, generated hundreds of clients.</li>
                                <li>Build & Launched a landing Page for TS-TEAM.aero, a worldwide logistics company</li>
                            </ul>
                        </div>

                        <div className="job">
                            <p className="job-title">Founder at KiviStudio.uz</p>
                            <p className="job-date">Dec 2022 - Present</p>
                            <p className="job-stack">Technologies: React, Next, Python, HTML, CSS, JavaScript</p>
                            <ul>
                                <li>Build jetour-uzbekistan.uz.uz</li>
                                <li>Build hongqiuzbekistan.uz</li>
                                <li>Build bestuneuzbekistan.uz</li>
                                <li>Build dongfenguzbekistan.uz</li>
                            </ul>
                        </div>

                        <div className="job">
                            <p className="job-title">Founder & CEO at Downloadlify</p>
                            <p className="job-date">May 2024- Sep 2024</p>
                            <p className="job-stack">Technologies: React, Next, Firebase, API, HTML, CSS</p>
                            <ul>
                                <li>Lead a team of 3 people at Downloadlify, had 50-users at the peak</li>
                            </ul>
                        </div>

                    </div>

                    <div className="education">
                        <p className="sec-title">Education:</p>
                        <div className="ed">
                            <a className="ed-title" href="https://najottalim.uz/">Najot Talim</a>
                            <p className="ed-desc">Frontend React JS Course <br />
                                March 2023 - October 2023.</p>
                        </div>
                    </div>

                    <div className="skills">
                        <p className="sec-title">Skills</p>
                        <div className="flex">
                            <ul>
                                <li>React JS</li>
                                <li>Next JS</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <ul>
                                <li>Uzbek - Native</li>
                                <li>Russian - Advanced</li>
                                <li>English - Advanced</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Resume
