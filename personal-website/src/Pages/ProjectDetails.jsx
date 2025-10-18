import React, { useEffect, memo, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import AnimatedBackground from "../components/Background";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CheckCircle2, Code2, Wind, Zap, Palette, Github } from "lucide-react";

// --- Demo data ---------------------------------------------------------------
const projects = {
  1: {
    name: "Portfolio Website",
    description:
      "A modern, animated personal portfolio built with React, Tailwind, and Vite. It showcases projects, experience, and an interactive background. A modern, animated personal portfolio built with React, Tailwind, and Vite. It showcases projects, experience, and an interactive background.",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    ],
    features: [
      "Responsive grid and slider galleries",
      "Project pages with rich details",
      "Smooth scroll-based interactions",
      "Animated header with gradient text",
      "Dark mode toggle with system preference",
      "Contact form with validation",
    ],
    technologies: [
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
    ],
  },
};

const techToIcon = {
  React: Code2,
  Vite: Zap,
  TailwindCSS: Wind,
  AOS: Palette,
  Slick: Zap,
  MUI: Palette,
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id] || Object.values(projects)[0];
  const demoVideoUrl =
    "https://mnuhdfulimayebkvchyh.supabase.co/storage/v1/object/public/techstack-icons//Screen%20Recording%202025-06-19%20164911.mp4";

  // De-duplicate any repeated features
  const features = Array.from(new Set(project.features));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // Make sure slick calculates width based on container
    variableWidth: false,
    centerMode: false,
  };

  const Icons = memo(({ name, url }) => (
    <button className="cursor-pointer group relative transform transition-all duration-300 hover:scale-105">
      <div className="relative flex flex-col items-center justify-center transition-all duration-300 w-18 h-18">
        <img src={url} className="w-9 h-9 object-contain" />
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </button>
  ));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Slick height + UI polish. If you prefer, move this into your global CSS. */}
      <style>{`
        /* Make slick fill its container's height */
        .slick-slider, .slick-list, .slick-track { height: 100%; }
        .slick-slide { height: 100%; }
        .slick-slide > div { height: 100%; }

        /* Nicer pagination dots */
        .slick-dots { bottom: 10px; }
        .slick-dots li button:before { font-size: 10px; opacity: .45; }
        .slick-dots li.slick-active button:before { opacity: 1; }

        /* Larger, easier arrows */
        .slick-prev, .slick-next { z-index: 20; }
        .slick-prev:before, .slick-next:before { font-size: 28px; }
      `}</style>

      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Header card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="">
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-sky-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                {project.name}
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-lg leading-relaxed text-left">
              {project.description}
            </p>
            {/* Tech stack */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 text-left">
                <div className="flex flex-direction-row justify-start items-center gap-2">
                  <Code2 className="text-blue-300" />
                  Tech Stack
                </div>
              </h2>
              <div className="mt-4 flex flex-wrap items-center]">
                {project.technologies.map((tech, index) => (
                  <Icons key={index} name={tech.name} url={tech.url} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="mt-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Key Features
              </h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-200 text-left"
                  >
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Github Link */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="cursor-pointer group relative p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mt-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex flex-row items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 px-4 py-3">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* BREAK */}
        </div>

        {/* Media / Slider card */}
        <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-900/60 mt-10 md:mt-20">
          {/* Fancy gradient outline on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />

          {/* Fixed-height container so slick can fill it */}
          <div className="h-[24rem] md:h-[30rem]">
            <Slider {...sliderSettings} className="h-full w-full">
              {[
                ...project.images.map((src) => ({ type: "image", src })),
                { type: "video", src: demoVideoUrl },
              ].map((item, index) => (
                <div key={index} className="h-full w-full">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`project-image-${index + 1}`}
                      className="h-full w-full object-cover select-none"
                      draggable={false}
                    />
                  ) : (
                    <video
                      autoPlay={false}
                      muted={false}
                      loop
                      controls
                      className="h-full w-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
