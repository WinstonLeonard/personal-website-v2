import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, memo, useState, useCallback } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { ArrowBigRight } from "lucide-react";

const CircleAndLine = () => {
  return (
    <div
      className="flex items-center flex-col"
    >
      <div className="w-1.5 bg-gradient-to-b from-[#3F4199] to-[#2C0C3D] opacity-70 h-10"></div>
      {/* <div className="rounded-full w-22 h-22 bg-white-500 border-2 border"></div> */}
      <button className="cursor-pointer group relative transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
        <div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative rounded-full w-20 h-20 bg-black/35 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA50SrRU-Wf5Y-C_01W6YoP6IxtYYBv_Pw4w&s" className="w-16 h-16 object-contain rounded-full" />
          </div>
        </div>
      </button>
      <div className="w-1.5 bg-gradient-to-b from-[#2C0C3D] to-[#3F4199] opacity-70 flex-grow"></div>
    </div>
  );
};

const ExperienceDetails = ({direction}) => {
    return (
        <div className="group w-full flex-grow flex relative">
            {/* Arrow pointing towards the content */}
            <div className={`absolute transform ${direction == "Right" ? "left-[-1rem] rotate-270" : "right-[-1rem] rotate-90"} top-10 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-500/100 group-hover:border-b-purple-500/40 transition-all duration-300`}></div>

            <div className="flex flex-grow relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
                <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            
                <div className="flex flex-grow relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg">
                    </div>
                    
                    
                    <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                </div>
            </div>
        </div>
    );
}



const TimelineEntry = ({ index }) => {
  if (index % 2 == 0) {
    return (
      <div className="relative w-[90%] mx-auto flex flex-row justify-center group"       data-aos="zoom-in-right"
      data-aos-duration="600">
        <div className="rounded-xl w-[40%] min-h-80 my-10 mr-7 flex relative">
            <ExperienceDetails direction={"Left"}/>
        </div>
        <CircleAndLine />
        <div className="pl-7 w-[40%]">
          <div className="rounded-xl w-full mt-10 min-h-80 flex">
            <p className="mt-7 font-semibold text-lg">From:</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative w-[90%] mx-auto flex flex-row justify-center group"       data-aos="zoom-in-left"
      data-aos-duration="600">
        <div className="rounded-xl w-[40%] min-h-80 my-10 mr-7 flex justify-end">
          <p className="mt-7 font-semibold text-lg">From:</p>
        </div>
        <CircleAndLine />
        <div className="pl-7 w-[40%]">
          <div className="rounded-xl w-full min-h-80 my-10 flex relative">
            <ExperienceDetails direction={"Right"} />
          </div>
        </div>
      </div>
    );
  }
};

const Experience = () => {
  useEffect(() => {
    AOS.init({
      mirror: true,
    });

    return () => AOS.refreshHard();
  }, []);

  return (
    <div id="Experience">
      <AnimatedHeader Title={"Experience"} />
      <div className="mt-10">
        <TimelineEntry index={0} />
        <TimelineEntry index={1} />
      </div>
    </div>
  );
};

export default Experience;
