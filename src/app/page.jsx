"use client"

import Image from "next/image";
import Link from "next/link";
import "./page.module.css"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="flex">
            <strong className="logo">sanjar.</strong>
            <div className="links">
              <Link href="/resume">Resume</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/travel">Travel</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <section className="hero">
            <div className="text-wrapper">
              <p>Hello! I’m Sanjar.</p>
              <h1>Frontend Dev with next level of <span>Creativity</span> </h1>
            </div>

            <div className="flex">
              <a href="mailto:sanjarkama26@gmail.com" className="contact-btn">
                Let’s Talk
                <img src="/img/icons/arrow-right-light.svg" alt="" />
              </a>
              <p>A frontend developer focused on building effective web sites & apps.</p>
            </div>

          </section>



          <section className="portfolio">
            <div className="portfolio-header">
              <h2>Selected works</h2>
              <a href="/projects" className="btn">
                View All Works
                <img src="/img/icons/arrow-right-dark.svg" alt="" />
              </a>
            </div>

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
              <img className="project-preview" src="/img/portfolio/project-5.png" alt="" />
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
              <img className="project-preview" src="/img/portfolio/project-6.png" alt="" />
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

          <section className="about-me">
            <div className="about-me__text">
              <h3>A frontend developer dedicated to making a world better place.</h3>
              <p>Focus on growing your business, and let me handle your online presence to help you stand out from the competition.</p>
            </div>
            <a href="/resume" className="more-btn">
              About Me
              <img src="/img/icons/arrow-right-dark.svg" alt="" />
            </a>
          </section>
        </div>

        <section className="slider">
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={0}
            loop={true}
            speed={10000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}

            modules={[Autoplay]} className="mySwiper">

            <SwiperSlide>
              <img src="/img/brand-logos/brand-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/brand-logos/brand-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/brand-logos/brand-3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/brand-logos/brand-4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/brand-logos/brand-5.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/brand-logos/brand-6.png" alt="" />
            </SwiperSlide>


          </Swiper>
        </section>

        <section className="blog">
          <div className="container">

            <div className="blog-header">
              <h4>Insights</h4>
              <a className="more-btn" href="/blog">View All Insights  <img src="/img/icons/arrow-right-dark.svg" alt="" /> </a>
            </div>

            <div className="highlights">
              <div className="post">
                <img src="/img/highlights/blog-post.png" alt="" />
                <div className="post__text">
                  <h6>Why Responsive Design Matters for Your Website</h6>
                  <p>Learn how responsive design enhances user experience and accessibility.</p>
                </div>
              </div>
              <div className="post">
                <img src="/img/highlights/blog-post.png" alt="" />
                <div className="post__text">
                  <h6>Top 5 JavaScript Frameworks for Frontend Developers in 2024</h6>
                  <p>Explore the best JavaScript frameworks to elevate your development projects.</p>
                </div>
              </div>
              <div className="post">
                <img src="/img/highlights/blog-post.png" alt="" />
                <div className="post__text">
                  <h6>How to Build a Standout Portfolio to Showcase Your Work</h6>
                  <p>Tips for creating an impressive portfolio that highlights your skills effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <p>Have an idea?</p>
            <h6>Let’s rock with me</h6>
            <a href="mailto:sanjarkama26@gmail.com">sanjarkama26@gmail.com</a>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="footer__text">
            <h6>sanjar.</h6>
            <p></p>
            <i>The genius thing we did was, we didn&apos;t give up - Jay Z </i>
          </div>
          <div className="socialmedia-links">
            <a target="_blank" href="https://github.com/sanjarproductions">GitHub</a>
            <a target="_blank" href="https://www.linkedin.com/in/sanjarkamaliddinov/">LinkedIn</a>
            <a target="_blank" href="https://x.com/sanjarprod">X</a>
            <a target="_blank" href="https://www.youtube.com/@sanjarcoding">YouTube</a>
          </div>
        </div>
      </footer>

    </>
  );
}
