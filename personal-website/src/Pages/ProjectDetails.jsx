import { useParams } from "react-router-dom";
import AnimatedBackground from "../components/Background";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CheckCircle2, Code2, Server, Wind, Zap, Palette } from "lucide-react";

const projects = {
    "1": {
        name: "Portfolio Website",
        description:
            "A modern, animated personal portfolio built with React, Tailwind, and Vite. It showcases projects, experience, and an interactive background.",
        images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        ],
        features: [
            "Animated hero and background effects",
            "Responsive grid and slider galleries",
            "Project pages with rich details",
            "Smooth scroll-based interactions",
            "Animated hero and background effects",
            "Animated hero and background effects",
            "Animated hero and background effects"
        ],
        technologies: ["React", "Vite", "TailwindCSS", "AOS", "Slick", "MUI"],
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

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects[id] || Object.values(projects)[0];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
    };

    return (
        <>
            <AnimatedBackground />
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 text-left">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 shadow-2xl p-6 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                        {project.name}
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl">
                        {project.description}
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    <div className="rounded-xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-xl">
                        <Slider {...sliderSettings}>
                            {project.images.map((src, index) => (
                                <div key={index} className="bg-black/20">
                                    <img
                                        src={src}
                                        alt={`project-image-${index + 1}`}
                                        className="w-full h-72 md:h-[28rem] object-cover"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 shadow-xl p-6 md:p-7">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Key Features</h2>
                        <ul className="mt-4 space-y-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-200">
                                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="mt-8 text-xl md:text-2xl font-semibold text-white">Technologies Used</h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {project.technologies.map((tech) => {
                                const Icon = techToIcon[tech] || Code2;
                                return (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-slate-900/60 text-gray-200 hover:scale-[1.02] transition"
                                        title={tech}
                                    >
                                        <Icon size={18} className="text-blue-300" />
                                        <span className="text-sm">{tech}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-10 rounded-xl overflow-hidden border border-white/10 bg-black/30">
                    <video autoPlay muted loop controls className="w-full">
                        <source src="https://mnuhdfulimayebkvchyh.supabase.co/storage/v1/object/public/techstack-icons//Screen%20Recording%202025-06-19%20164911.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
               
            </div>
        </>
    );
};

export default ProjectDetails;