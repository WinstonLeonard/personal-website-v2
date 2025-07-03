import AOS from "aos";
import "aos/dist/aos.css";


const AnimatedHeader = ({Title}) => (
  <div className="mt-40 text-center lg:mb-8 mb-2 px-[5%]">
    <div
      className="inline-block relative group"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        {Title}
      </h2>
    </div>
  </div>
);

export default AnimatedHeader;