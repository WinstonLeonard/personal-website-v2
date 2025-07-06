import DummyComponent from "../components/DummyComponent";
import AnimatedBackground from "../components/Background";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Projects from "./Projects";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
      <DummyComponent />
      <DummyComponent />
    </>
  );
};

export default LandingPage;
