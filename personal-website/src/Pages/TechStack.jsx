import React, { useEffect, memo, useState, useCallback } from "react";
import { Laptop, MonitorCog, BrainCircuit, Code, Wrench } from "lucide-react";
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedHeader = () => (
  <div className="mt-60 text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group" data-aos="zoom-in-up" data-aos-duration="600">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        Tech Stack
      </h2>
    </div>
  </div>
);

const SelectionChoice = memo(({ text, icon, onClick, currentSelected }) => (
    currentSelected == text ? 
    (
          <div
    className="group bg-[#362A54] flex-grow rounded-xl flex flex-col items-center justify-center hover:bg-[#362A54] hover:scale-105 transition-all duration-300 cursor-pointer" 
    onClick={() => onClick(text)}
  >
    {icon && <div className="text-whitegroup-hover:text-white group-hover:rotate-4 duration-300">{icon}</div>}
    <p className="text-white">{text}</p>
  </div>
    ) :
    (
  <div
    className="group flex-grow rounded-xl flex flex-col items-center justify-center hover:bg-[#271F3D] hover:scale-105 transition-all duration-300 cursor-pointer" 
    onClick={() => onClick(text)}
  >
    {icon && <div className="text-gray-400 group-hover:text-white group-hover:rotate-4 duration-300">{icon}</div>}
    <p className="text-gray-400 group-hover:text-white">{text}</p>
  </div>
    )
));

const AnimatedSelectionBar = ({ onSelect, currentSelected }) => (
  <div className="self-center justify-self-center mt-10 w-[80%]">
    <div data-aos="zoom-in-up" data-aos-duration="600">
      <div className="rounded-xl bg-gradient-to-r from-[#2B282B] to-[#242424] backdrop-blur-xl h-26 relative p-2">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 transition duration-300"></div>
        <div className="h-full rounded-xl bg-black/50 backdrop-blur-xl flex space-x-4 py">
          <SelectionChoice text="Frontend" icon={<Laptop />} onClick={onSelect} currentSelected={currentSelected} />
          <SelectionChoice text="Backend" icon={<MonitorCog />} onClick={onSelect} currentSelected={currentSelected}/>
          <SelectionChoice text="AI / ML" icon={<BrainCircuit />} onClick={onSelect} currentSelected={currentSelected}/>
          <SelectionChoice text="Languages" icon={<Code />} onClick={onSelect} currentSelected={currentSelected} />
          <SelectionChoice text="Tools" icon={<Wrench />} onClick={onSelect} currentSelected={currentSelected} />
        </div>
      </div>
    </div>
  </div>
);

function TechStack() {
  const [selected, setSelected] = useState('');

  const handleSelection = useCallback((text) => {
    setSelected(text);
  }, []);

  useEffect(() => {
    AOS.init({
        mirror: true,
    });

    return () => AOS.refreshHard();
  }, []);

  return (
    <div
          id="TechStack">
      <AnimatedHeader />
      <AnimatedSelectionBar onSelect={handleSelection} currentSelected={selected} />
    </div>
  );
}

export default TechStack;