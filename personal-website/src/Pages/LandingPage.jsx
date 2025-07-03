import DummyComponent from "../components/DummyComponent";
import AnimatedBackground from "../components/Background";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Experience from "./Experience";

const LandingPage = () => {
    return (
    <>
    <AnimatedBackground />
    <AboutMe/>
    <TechStack />
    <Experience />
    <DummyComponent />
        <DummyComponent />

    </>
    );
}

export default LandingPage