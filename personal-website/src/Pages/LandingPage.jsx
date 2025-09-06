import DummyComponent from "../components/DummyComponent";
import Certificate from "../components/Certificate";
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
      <div style={{ padding: 16 }}>
        <Certificate
          src="/certificate.pdf"
          title="Certificate Preview"
          thumbnailHeight={240}
        />
      </div>
      <DummyComponent />
    </>
  );
};

export default LandingPage;
