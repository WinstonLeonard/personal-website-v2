import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, memo, useState, useCallback } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { ArrowBigRight  } from 'lucide-react';



const CircleAndLine = () => {
    return (
        <div className="flex items-center flex-col">
        <div className="w-1 bg-gray-300 h-10"></div>
        <div className="rounded-full w-20 h-20 bg-white-500 border-2 border"></div>
        <div className="w-1 bg-gray-300 flex-grow"></div>
        </div>
    )
}

const TimelineEntry = ({index}) => {
    if (index % 2 == 0) {
        return (
        <div className="relative w-[90%] mx-auto flex flex-row bg-red-500 justify-center">
        <div className="border-1 rounded-xl w-[45%] min-h-80 my-10 mr-5"></div>
        <CircleAndLine />
        <div className="pl-5 w-[45%]">
        <div className="border-1 rounded-xl w-full mt-10 min-h-80 flex">
            <p className="mt-7">From:</p>
        </div>
        </div>

    </div>
        )
    } else {
        return (
            <div className="relative w-[90%] mx-auto flex flex-row bg-red-500 justify-center">
                <div className="rounded-xl w-[45%] min-h-80 my-10 mr-5 flex justify-end border-1">
                    <p className="mt-7">From:</p>
                </div>
                <CircleAndLine />
                <div className="pl-5 w-[45%]">
                <div className="border-1 rounded-xl w-full min-h-80 my-10"></div>
                </div>
            </div>
        )
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
            <AnimatedHeader Title={"Experience"}/>
            <TimelineEntry index={0} />
            <TimelineEntry index={1}/>


        </div>

    )
}

export default Experience;