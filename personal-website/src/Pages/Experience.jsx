import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import AnimatedHeader from "../components/AnimatedHeader";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Continental Automotive",
    points: [
      "Accomplished [X] as measured by [Y], by doing [Z].",
      "Accomplished [X] as measured by [Y], by doing [Z].",
    ],
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA50SrRU-Wf5Y-C_01W6YoP6IxtYYBv_Pw4w&s",
    duration: "Jan 2024 – Jun 2024",
  },
  {
    role: "Software Engineer Intern",
    company: "Continental Automotive",
    points: [
      "Accomplished [X] as measured by [Y], by doing [Z].",
      "Accomplished [X] as measured by [Y], by doing [Z].",
    ],
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA50SrRU-Wf5Y-C_01W6YoP6IxtYYBv_Pw4w&s",
    duration: "Jul 2024 – Dec 2024",
  },
];

/* ========== Small, data-only components ========== */

const CircleAndLine = React.memo(({ image }) => (
  <div className="flex items-center flex-col">
    <div className="w-1.5 bg-gradient-to-b from-[#3F4199] to-[#2C0C3D] opacity-70 h-10"></div>
    <button className="cursor-pointer group relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
      <div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-full w-20 h-20 bg-black/35 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <img
            src={image}
            alt="Company logo"
            className="w-16 h-16 object-contain rounded-full"
          />
        </div>
      </div>
    </button>
    <div className="w-1.5 bg-gradient-to-b from-[#2C0C3D] to-[#3F4199] opacity-70 flex-grow"></div>
  </div>
));

const ExperiencePoint = React.memo(({ points }) => (
  <div>
    {points.map((point, index) => (
      <div className="flex flex-row justify-start items-start">
        <div className="w-[3%] flex">
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300 mt-2.5" />
        </div>
        <div className="w-[96%] flex justify-start items-start flex-col">
          <p className="w-full self-start text-justify font-md group-hover:font-semibold transition-all duration-300 mb-2">
            {point}
          </p>
        </div>
      </div>
    ))}
  </div>
));

const TechStackIcon = React.memo(({ icons }) => (
  <div className="flex flex-row flex-wrap">
    {icons.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt="Tech icon"
        className="w-7 h-7 mr-2 object-contain group-hover:w-8 group-hover:h-8 transition-all duration-300"
      />
    ))}
  </div>
));

const TechStack = React.memo(({ techStack }) => (
  <div className="flex place-self-end flex-col group mt-2">
    <div>
      <p className="mb-1 font-semibold group-hover:font-bold transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-400/90 to-purple-500/90">
        Tech Stack
      </p>
    </div>
    <TechStackIcon icons={techStack} />
  </div>
));

/* ========== Card body (desktop) ========== */

const ExperienceDetails = React.memo(({ direction, data }) => (
  <div className="group w-full flex-grow flex relative cursor-pointer">
    {/* Directional arrow */}
    <div
      className={`absolute transform ${
        direction === "Right"
          ? "left-[-1rem] rotate-[270deg]"
          : "right-[-1rem] rotate-90"
      } top-10 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-500/100 group-hover:border-b-purple-500/40 transition-all duration-300`}
    ></div>

    <div className="flex flex-grow relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
      <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="flex flex-grow relative p-5 z-10 flex-col">
        <div className="items-start justify-start text-left group">
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-200 via-white-200 to-purple-200 bg-clip-text text-transparent group-hover:font-bold transition-all duration-300">
            {data.role}
          </p>
          <p className="text-lg font-semibold mt-3 text-gray-300 group-hover:font-bold transition-all duration-300">
            {data.company}
          </p>
        </div>

        <div className="flex flex-col flex-grow mt-3 group">
          <ExperiencePoint points={data.points} />

          <div className="flex flex-grow justify-between">
            <TechStack techStack={data.techStack} />
          </div>
        </div>

        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </div>
  </div>
));

/* ========== Timeline row (desktop) ========== */

const TimelineEntry = React.memo(({ index, data }) => {
  const isEven = index % 2 === 0;

  if (isEven) {
    // Card on left, date on right
    return (
      <div
        className="relative w-[95%] mx-auto flex flex-row justify-center group"
        data-aos="zoom-in-right"
        data-aos-duration="600"
      >
        <div className="rounded-xl w-[43%] min-h-80 my-10 mr-7 flex relative">
          <ExperienceDetails direction="Left" data={data} />
        </div>
        <CircleAndLine image={data.image} />
        <div className="pl-7 w-[43%]">
          <div className="rounded-xl w-full mt-10 min-h-80 flex">
            <p className="mt-7 font-semibold text-lg">From: {data.duration}</p>
          </div>
        </div>
      </div>
    );
  }

  // Card on right, date on left
  return (
    <div
      className="relative w-[95%] mx-auto flex flex-row justify-center group"
      data-aos="zoom-in-left"
      data-aos-duration="600"
    >
      <div className="rounded-xl w-[43%] min-h-80 my-10 mr-7 flex justify-end">
        <p className="mt-7 font-semibold text-lg">From: {data.duration}</p>
      </div>
      <CircleAndLine image={data.image} />
      <div className="pl-7 w-[43%]">
        <div className="rounded-xl w-full min-h-80 my-10 flex relative">
          <ExperienceDetails direction="Right" data={data} />
        </div>
      </div>
    </div>
  );
});

/* ========== Mobile components ========== */

const TechStackIconMobile = React.memo(({ src }) => (
  <img src={src} alt="Tech icon" className="w-6 h-6 mr-2 object-contain" />
));

const TechStackMobile = React.memo(({ techStack }) => (
  <div className="flex place-self-end flex-col group mt-2">
    <div className="flex">
      <p className="mb-1 font-semibold group-hover:font-bold transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-400/90 to-purple-500/90">
        Tech Stack
      </p>
    </div>
    <div className="flex flex-row flex-wrap">
      {techStack.map((src, idx) => (
        <TechStackIconMobile key={idx} src={src} />
      ))}
    </div>
  </div>
));

const ExperiencePointsMobile = React.memo(({ points }) => (
  <div className="flex flex-col gap-2">
    {points.map((p, i) => (
      <div key={i} className="flex flex-row justify-start items-start">
        <div className="w-[3%] flex mr-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2.5" />
        </div>
        <div className="w-[96%] flex justify-start items-start ">
          <p className="w-full self-start text-left font-md ">{p}</p>
        </div>
      </div>
    ))}
  </div>
));

const ExperienceDetailsMobile = React.memo(({ direction, data }) => (
  <div className="group w-full flex-grow flex relative cursor-pointer">
    {/* Directional arrow */}
    <div
      className={`absolute transform ${
        direction === "Right"
          ? "left-[-1rem] rotate-[270deg]"
          : "right-[-1rem] rotate-90"
      } top-7 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-500/100 group-hover:border-b-purple-500/40 transition-all duration-300`}
    ></div>

    <div className="flex flex-grow relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
      <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="flex flex-grow relative p-5 z-10 flex-col">
        <div className="items-start justify-start text-left group">
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-200 via-white-200 to-purple-200 bg-clip-text text-transparent">
            {data.role}
          </p>
          <p className="text-lg font-semibold mt-3 text-gray-300">
            {data.company}
          </p>
        </div>

        <div className="flex flex-col flex-grow mt-3 group">
          <ExperiencePointsMobile points={data.points} />
          <div className="flex flex-grow justify-between">
            <TechStackMobile techStack={data.techStack} />
          </div>
        </div>

        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </div>
  </div>
));

const CircleAndLineMobile = React.memo(({ image }) => (
  <div className="flex items-center flex-col">
    <div className="w-1 bg-gradient-to-b from-[#3F4199] to-[#2C0C3D] opacity-70 h-10"></div>
    <button className="cursor-pointer group relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
      <div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-full w-15 h-15 bg-black/35 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <img
            src={image}
            alt="Company logo"
            className="w-12 h-12 object-contain rounded-full"
          />
        </div>
      </div>
    </button>
    <div className="w-1 bg-gradient-to-b from-[#2C0C3D] to-[#3F4199] opacity-70 flex-grow"></div>
  </div>
));

const TimelineEntryMobile = React.memo(({ data }) => (
  <div
    className="flex flex-row group"
    data-aos="zoom-in-left"
    data-aos-duration="600"
  >
    <CircleAndLineMobile image={data.image} />
    <div className="pl-3 flex-grow">
      <div className="rounded-xl flex-grow min-h-80 my-10 flex relative">
        <ExperienceDetailsMobile direction="Right" data={data} />
      </div>
      <p className="pl-1 -mt-4 text-sm text-gray-300">From: {data.duration}</p>
    </div>
  </div>
));

/* ========== Page ========== */

const Experience = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div id="Experience">
      <AnimatedHeader Title={"Experience"} />

      {/* Desktop */}
      <div className="hidden lg:flex flex-col">
        <div className="mt-10">
          {experienceData.map((data, index) => (
            <TimelineEntry key={index} index={index} data={data} />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden flex-col items-start pl-5 pr-5 justify-start">
        <div className="mt-10 w-full flex-col">
          {experienceData.map((data, index) => (
            <TimelineEntryMobile key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
