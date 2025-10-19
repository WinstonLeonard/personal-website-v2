import DummyComponent from "../components/DummyComponent";
import AnimatedBackground from "../components/Background";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Navbar from "../components/NavBar";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
      <Certificates />
      <DummyComponent />
    </>
  );
};

export default LandingPage;
