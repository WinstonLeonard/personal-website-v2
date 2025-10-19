import React, { useEffect, memo, useState, useCallback } from "react";
import {
  Laptop,
  MonitorCog,
  BrainCircuit,
  Code,
  Wrench,
  Github,
} from "lucide-react";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchFrontEnd } from "../api/TechStackApi";
import AnimatedHeader from "../components/AnimatedHeader";
import frontend from "../Data/TechStack/frontend.json";
import backend from "../Data/TechStack/backend.json";
import ai_ml from "../Data/TechStack/ai_ml.json";
import languages from "../Data/TechStack/languages.json";
import tools from "../Data/TechStack/tools.json";

const SelectionChoice = memo(({ text, icon, onClick, currentSelected }) =>
  currentSelected == text ? (
    <div
      className="group bg-[#362A54] flex-grow rounded-xl flex flex-col items-center justify-center hover:bg-[#362A54] transition-all duration-300 cursor-pointer"
      onClick={() => onClick(text)}
    >
      {icon && <div className="text-white">{icon}</div>}
      <p className="text-white">{text}</p>
    </div>
  ) : (
    <div
      className="group flex-grow rounded-xl flex flex-col items-center justify-center hover:bg-[#271F3D] hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(text)}
    >
      {icon && (
        <div className="text-gray-400 group-hover:text-white group-hover:rotate-4 duration-300">
          {icon}
        </div>
      )}
      <p className="text-gray-400 group-hover:text-white">{text}</p>
    </div>
  )
);

const AnimatedSelectionBar = memo(({ onSelect, currentSelected }) => (
  <div className="self-center justify-self-center mt-10 w-[85%]">
    <div data-aos="zoom-in-up" data-aos-duration="600">
      <div className="rounded-xl bg-gradient-to-r from-[#2B282B] to-[#242424] backdrop-blur-xl h-26 relative p-2">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 transition duration-300"></div>
        <div className="h-full rounded-xl bg-black/50 backdrop-blur-xl flex space-x-4 py">
          <SelectionChoice
            text="Frontend"
            icon={<Laptop />}
            onClick={onSelect}
            currentSelected={currentSelected}
          />
          <SelectionChoice
            text="Backend"
            icon={<MonitorCog />}
            onClick={onSelect}
            currentSelected={currentSelected}
          />
          <SelectionChoice
            text="AI / ML"
            icon={<BrainCircuit />}
            onClick={onSelect}
            currentSelected={currentSelected}
          />
          <SelectionChoice
            text="Languages"
            icon={<Code />}
            onClick={onSelect}
            currentSelected={currentSelected}
          />
          <SelectionChoice
            text="Tools"
            icon={<Wrench />}
            onClick={onSelect}
            currentSelected={currentSelected}
          />
        </div>
      </div>
    </div>
  </div>
));

const SelectionChoiceMobile = memo(({ text, icon, onClick, currentSelected }) =>
  currentSelected == text ? (
    <div
      className="group bg-[#362A54] rounded-xl flex flex-col items-center justify-center hover:bg-[#362A54] transition-all duration-300 cursor-pointer flex-wrap flex-grow mx-4 my-2"
      onClick={() => onClick(text)}
    >
      {icon && <div className="text-white">{icon}</div>}
      <p className="text-white">{text}</p>
    </div>
  ) : (
    <div
      className="group rounded-xl flex flex-col items-center justify-center hover:bg-[#271F3D] hover:scale-105 transition-all duration-300 cursor-pointer flex-wrap flex-grow mx-4 my-2"
      onClick={() => onClick(text)}
    >
      {icon && (
        <div className="text-gray-400 group-hover:text-white group-hover:rotate-4 duration-300">
          {icon}
        </div>
      )}
      <p className="text-gray-400 group-hover:text-white">{text}</p>
    </div>
  )
);

const AnimatedSelectionBarMobile = React.memo(
  ({ onSelect, currentSelected }) => (
    <div className="self-center justify-self-center mt-10 w-[90%]">
      <div data-aos="zoom-in-up" data-aos-duration="600">
        <div className="rounded-xl bg-gradient-to-r from-[#2B282B] to-[#242424] backdrop-blur-xl min-h-20 relative p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 transition duration-300"></div>
          <div className="h-full rounded-xl bg-black/50 backdrop-blur-xl flex space-x-4 flex-wrap justify-center items-center p-4">
            <SelectionChoiceMobile
              text="Frontend"
              icon={<Laptop />}
              onClick={onSelect}
              currentSelected={currentSelected}
            />
            <SelectionChoiceMobile
              text="Backend"
              icon={<MonitorCog />}
              onClick={onSelect}
              currentSelected={currentSelected}
            />
            <SelectionChoiceMobile
              text="AI / ML"
              icon={<BrainCircuit />}
              onClick={onSelect}
              currentSelected={currentSelected}
            />
            <SelectionChoiceMobile
              text="Languages"
              icon={<Code />}
              onClick={onSelect}
              currentSelected={currentSelected}
            />
            <SelectionChoiceMobile
              text="Tools"
              icon={<Wrench />}
              onClick={onSelect}
              currentSelected={currentSelected}
            />
          </div>
        </div>
      </div>
    </div>
  )
);

const Icons = memo(({ name, url }) => (
  <button className="cursor-pointer group relative p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mr-8 mt-3">
    <div data-aos="zoom-in-up" data-aos-duration="600">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 w-35 h-35">
        <img src={url} className="w-19 h-19 object-contain" />
        <p className="text-xl mt-2 font-semibold">{name}</p>
      </div>
    </div>
  </button>
));

const IconContainer = memo(({ selectedIcons }) => (
  <div className="flex flex-wrap self-center justify-self-center mt-10 w-[85%] p-5 justify-center">
    {selectedIcons.map((icon, index) => (
      <Icons key={index} name={icon.name} url={icon.url} />
    ))}
  </div>
));

const IconsMobile = memo(({ name, url }) => (
  <button className="cursor-pointer group relative p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mt-3">
    <div data-aos="zoom-in-up" data-aos-duration="600">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 w-20 h-20">
        <img src={url} className="w-8 h-8 object-contain" />
        <p className="text-sm mt-2 font-semibold">{name}</p>
      </div>
    </div>
  </button>
));

const IconContainerMobile = memo(({ selectedIcons }) => (
  <div className="flex flex-wrap self-center justify-self-center mt-10 w-[85%] justify-center">
    {selectedIcons.map((icon, index) => (
      <IconsMobile key={index} name={icon.name} url={icon.url} />
    ))}
  </div>
));

function TechStack() {
  const [selected, setSelected] = useState("Frontend");
  const [frontEndData, setFrontEndData] = useState(frontend);
  const [backEndData, setBackEndData] = useState(backend);
  const [aiMlData, setAiMlData] = useState(ai_ml);
  const [languagesData, setLanguagesData] = useState(languages);
  const [toolsData, setToolsData] = useState(tools);

  const [selectedIcons, setSelectedIcons] = useState(frontEndData);

  const handleSelection = useCallback((text) => {
    setSelected(text);
    switch (text) {
      case "Frontend":
        setSelectedIcons(frontEndData);
        break;
      case "Backend":
        setSelectedIcons(backEndData);
        break;
      case "AI / ML":
        setSelectedIcons(aiMlData);
        break;
      case "Languages":
        setSelectedIcons(languagesData);
        break;
      case "Tools":
        setSelectedIcons(toolsData);
        break;
      default:
        setSelectedIcons([]);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchFrontEnd();
        //console.log("Fetched Frontend Data:", result);
        //setFrontEndData(result);
      } catch (err) {}
    };

    getData();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    switch (selected) {
      case "Frontend":
        setSelectedIcons(frontEndData);
        break;
      case "Backend":
        setSelectedIcons(backEndData);
        break;
      case "AI / ML":
        setSelectedIcons(aiMlData);
        break;
      case "Languages":
        setSelectedIcons(languagesData);
        break;
      case "Tools":
        setSelectedIcons(toolsData);
        break;
    }
  }, [frontEndData, backEndData, aiMlData, languagesData, toolsData]);

  return (
    <div id="techstack">
      <div className="hidden md:flex flex-col">
        <AnimatedHeader Title={"Tech Stack"} />
        <AnimatedSelectionBar
          onSelect={handleSelection}
          currentSelected={selected}
        />
        <IconContainer selectedIcons={selectedIcons} />
      </div>
      <div className="flex md:hidden flex-col">
        <AnimatedHeader Title={"Tech Stack"} />
        <AnimatedSelectionBarMobile
          onSelect={handleSelection}
          currentSelected={selected}
        />
        <IconContainerMobile selectedIcons={selectedIcons} />
      </div>
    </div>
  );
}

export default TechStack;
