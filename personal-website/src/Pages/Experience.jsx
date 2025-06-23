import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, memo, useState, useCallback } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { ArrowBigRight } from "lucide-react";

const CircleAndLine = () => {
  return (
    <div
      className="flex items-center flex-col"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      <div className="w-1.5 bg-gradient-to-b from-[#3F4199] to-[#2C0C3D] opacity-70 h-10"></div>
      {/* <div className="rounded-full w-22 h-22 bg-white-500 border-2 border"></div> */}
      <button className="cursor-pointer group relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative rounded-full w-20 h-20 bg-black/35 backdrop-blur-xl flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
        </div>
      </button>
      <div className="w-1.5 bg-gradient-to-b from-[#2C0C3D] to-[#3F4199] opacity-70 flex-grow"></div>
    </div>
  );
};

const TimelineEntry = ({ index }) => {
  if (index % 2 == 0) {
    return (
      <div className="relative w-[90%] mx-auto flex flex-row justify-center">
        <div className="border-1 rounded-xl w-[45%] min-h-80 my-10 mr-5"></div>
        <CircleAndLine />
        <div className="pl-5 w-[45%]">
          <div className="rounded-xl w-full mt-10 min-h-80 flex">
            <p className="mt-7 font-semibold text-lg">From:</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative w-[90%] mx-auto flex flex-row justify-center">
        <div className="rounded-xl w-[45%] min-h-80 my-10 mr-5 flex justify-end">
          <p className="mt-7 font-semibold text-lg">From:</p>
        </div>
        <CircleAndLine />
        <div className="pl-5 w-[45%]">
          <div className="border-1 rounded-xl w-full min-h-80 my-10"></div>
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
