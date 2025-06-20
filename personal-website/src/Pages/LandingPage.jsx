import DummyComponent from "../components/DummyComponent";
import AnimatedBackground from "../components/Background";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";

const LandingPage = () => {
    return (
    <>
    <AnimatedBackground />
    <AboutMe/>
    <TechStack />
    <DummyComponent />
        <DummyComponent />

    </>
    );
}

export default LandingPage