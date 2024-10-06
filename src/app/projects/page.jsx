import React from 'react'
import "./project.css"

const Projects = () => {
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
            
            <main>
                <div className="container">
                    <section className="portfolio">
                        
                        {/* <div className="portfolio-header">
                            <h2>Selected works</h2>
                            <a href="/projects" className="btn">
                                View All Works
                                <img src="/img/icons/arrow-right-dark.svg" alt="" />
                            </a>
                        </div> */}

                        <div className="portfolio-item">
                            <img className="project-preview" src="/img/portfolio/project-1.png" alt="" />
                            <div className="portfolio-item__text">
                                <div>
                                    <strong>Jetour</strong>
                                    <p>Landing Page / Website</p>
                                </div>
                                <a href="https://jetour-uzbekistan.uz/" target="_blank" className="visit-btn">
                                    <img src="/img/icons/arrow-right-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <img className="project-preview" src="/img/portfolio/project-2.png" alt="" />
                            <div className="portfolio-item__text">
                                <div>
                                    <strong>Hongqi</strong>
                                    <p>Landing Page / Website</p>
                                </div>
                                <a href="https://hongqiuzbekistan.uz/" target="_blank" className="visit-btn">
                                    <img src="/img/icons/arrow-right-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <img className="project-preview" src="/img/portfolio/project-3.png" alt="" />
                            <div className="portfolio-item__text">
                                <div>
                                    <strong>Kivi Studio</strong>
                                    <p>Website</p>
                                </div>
                                <a href="https://kivistudio.uz/" target="_blank" className="visit-btn">
                                    <img src="/img/icons/arrow-right-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <img className="project-preview" src="/img/portfolio/project-4.png" alt="" />
                            <div className="portfolio-item__text">
                                <div>
                                    <strong>Mold Components</strong>
                                    <p>E-commerse / Web App</p>
                                </div>
                                <a href="https://mold-react-september.vercel.app/" target="_blank" className="visit-btn">
                                    <img src="/img/icons/arrow-right-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default Projects
