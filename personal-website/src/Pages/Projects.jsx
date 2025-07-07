import AnimatedHeader from "../components/AnimatedHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  fontSize: "30px",
  cursor: "pointer",
  color: "black",
  borderRadius: "100%",
  padding: "8px",
};

export const NextArrow = ({ onClick }) => (
  <div onClick={onClick} style={{ ...arrowStyle, right: "15px" }}>
    ›
  </div>
);

export const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} style={{ ...arrowStyle, left: "15px" }}>
    ‹
  </div>
);

const ImageSlider = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSmJgXu6kW8ONXMTLq0LD6BJGFV3Hoc0DRg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSmJgXu6kW8ONXMTLq0LD6BJGFV3Hoc0DRg&s"
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full rounded-xl">
      <Slider {...settings}>
        {images.map((url, i) => (
          <div key={i}>
            <img
              src={url}
              alt={`slide-${i}`}
              className="w-full h-60 object-contain rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group cursor-pointer"
      data-aos="zoom-in-up"
      data-aos-duration="700"
    >
      <div className="flex flex-grow overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
        <div className="flex-grow absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="flex flex-grow relative flex-col w-full h-120 relative p-4">
          <div className="w-full h-[50%] overflow-hidden rounded-xl">
                <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSmJgXu6kW8ONXMTLq0LD6BJGFV3Hoc0DRg&s"}
              className="w-full h-full rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="items-start justify-start text-left group">
            <p className="mt-5 text-2xl font-semibold bg-gradient-to-r from-blue-200 via-white-200 to-purple-200 bg-clip-text text-transparent">
              Project name
            </p>
            <p className="text-lg font-[300] mt-3 text-gray-300">
              This is the description of the project. This is the description of the project. This is the description of the project.
            </p>
          </div>

            <div className="mt-auto flex justify-end">
    <div className="h-8 hover:scale-110 transition-transform duration-500 cursor-pointer">
            <p className="text-blue-200" onClick={() =>navigate("/project/1")}>See More</p>

    </div>
  </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  return (
    <>
      <AnimatedHeader Title={"Projects"} />
<div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] max-w-[90%] mx-auto gap-x-5 gap-y-5 mt-10">
        <ProjectCard project={{}} />
        <ProjectCard project={{}} />
        <ProjectCard project={{}} />
        <ProjectCard project={{}} />
      </div>
    </>
  );
};

export default Projects;
