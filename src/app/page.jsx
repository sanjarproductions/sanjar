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
          <section className="hero">
            <div className="text-wrapper">
              <p>Hello! I’m Sanjar.</p>
              <h1>Designing digital product with emphasis on <span>visual design</span> </h1>
            </div>

            <div className="flex">
              <a href="mailto:sanjarkama26@gmail.com" className="contact-btn">
                Let’s Talk
                <img src="/img/icons/arrow-right-light.svg" alt="" />
              </a>
              <p>A multidisciplinary designer harnessing the power of design to achieve online goals.</p>
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
              <img className="project-preview" src="/img/portfolio/project.png" alt="" />
              <div className="portfolio-item__text">
                <div>
                  <strong>Sportly</strong>
                  <p>Mobile App Design</p>
                </div>
                <a href="/" className="visit-btn">
                  <img src="/img/icons/arrow-right-dark.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <img className="project-preview" src="/img/portfolio/project.png" alt="" />
              <div className="portfolio-item__text">
                <div>
                  <strong>Sportly</strong>
                  <p>Mobile App Design</p>
                </div>
                <a href="/" className="visit-btn">
                  <img src="/img/icons/arrow-right-dark.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <img className="project-preview" src="/img/portfolio/project.png" alt="" />
              <div className="portfolio-item__text">
                <div>
                  <strong>Sportly</strong>
                  <p>Mobile App Design</p>
                </div>
                <a href="/" className="visit-btn">
                  <img src="/img/icons/arrow-right-dark.svg" alt="" />
                </a>
              </div>
            </div>

          </section>

          <section className="about-me">
            <div className="about-me__text">
              <h3>A visual designer focused on creating emotional digital experience</h3>
              <p>Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is efficiently portrayed in the digital realm and distinguishes itself from the rivals.</p>
            </div>
            <a href="/" className="more-btn">
              About Me
              <img src="/img/icons/arrow-right-dark.svg" alt="" />
            </a>
          </section>
        </div>

        <section className="slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} className="mySwiper">

            <SwiperSlide>
              <Image src="/img/brand-logos/brand-logo.svg" alt="" width="100" height="100"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/brand-logos/brand-logo.svg" alt="" width="100" height="100"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/brand-logos/brand-logo.svg" alt="" width="100" height="100"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/img/brand-logos/brand-logo.svg" alt="" width="100" height="100"></Image>
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
                  <h6>Mastering the Art of Color Theory: A Visual Designer&apos;s Guide</h6>
                  <p>Dive into the fascinating world of color theory and learn how to create captivating visual designs by </p>
                </div>
              </div>
              <div className="post">
                <img src="/img/highlights/blog-post.png" alt="" />
                <div className="post__text">
                  <h6>Mastering the Art of Color Theory: A Visual Designer&apos;s Guide</h6>
                  <p>Dive into the fascinating world of color theory and learn how to create captivating visual designs by </p>
                </div>
              </div>
              <div className="post">
                <img src="/img/highlights/blog-post.png" alt="" />
                <div className="post__text">
                  <h6>Mastering the Art of Color Theory: A Visual Designer&apos;s Guide</h6>
                  <p>Dive into the fascinating world of color theory and learn how to create captivating visual designs by </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <p>Have an idea?</p>
            <h5>Let’s rock with me</h5>
            <a href="mailto:sanjarkama26@gmail.com">sanjarkama26@gmail.com</a>
          </div>
        </section>





      </main>

      <footer>
        <div className="container">

        </div>
      </footer>

    </>
  );
}
