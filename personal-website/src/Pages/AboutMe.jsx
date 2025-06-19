import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, Mail, Github, Instagram, Linkedin  } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
  </div>
));

const IntroText = memo(() => (
    <div class="flex flex-col p-5 lg:items-start" >
  <div className="">
    <h2 
      className="text-4xl md:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
      data-aos="zoom-in-up" 
      data-aos-duration="600"
    >
      Hello World! I'm
    </h2>
  </div>

    <div className="">
    <h2 
      className="text-4xl md:text-4xl mb-5 font-bold text-white bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] leading-normal" 
      data-aos="zoom-in-up" 
      data-aos-duration="600"
    >
       Winston Leonard Prayonggo
    </h2>
    </div>

    <div>
                    <p 
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0 max-w-5xl"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
I'm a Computer Science Undergraduate at NUS (National University of Singapore), specializing in Software Engineering, Artificial Intelligence, and Machine Learning. I thrive on building innovative full-stack applications and diving deep into AI/ML to develop solutions that challenge the status quo and shape the future of technology.
            </p>
    </div>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex self-center justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          <img
            src="/ProfilePhoto.jpg"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const SocialMediaIcons = () => {
    return (
        <>
        <button className="group relative p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mr-8"         data-aos="zoom-in-up"
        data-aos-duration="600">
  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
    <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
  </div>
</button>

<button className="group relative p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mr-8"         data-aos="zoom-in-up"
        data-aos-duration="600">
  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
  </div>
</button>

<button className="group relative p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mr-8 "         data-aos="zoom-in-up"
        data-aos-duration="600">
  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
  </div>
</button>

<button className="group relative p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg mr-8 "         data-aos="zoom-in-up"
        data-aos-duration="600">
  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
  <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
    <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
  </div>
</button>
        </>
    )
}




const AboutMe = () => {
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

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
      return (
    <div
      className="" 
      id="About"
    >

    <div class="flex lg:hidden">
    {/* This div will only appear on small screens (below 640px). */}
    <div class="flex flex-col">
        <ProfileImage />
        <IntroText />
        <div class="flex flex-row w-full items-center justify-center">
            <SocialMediaIcons />
        </div>

    </div>

    </div>

    <div class="hidden lg:flex flex-col w-full">

        <div class="flex flex-row w-full justify-between">
            <IntroText />
            <ProfileImage />
        </div>

        <div class="flex flex-row w-full pl-5">
            <SocialMediaIcons />
        </div>

    </div>



      </div>
      )
}

export default AboutMe;