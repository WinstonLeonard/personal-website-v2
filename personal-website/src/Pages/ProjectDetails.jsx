import { useParams } from "react-router-dom";
import AnimatedBackground from "../components/Background";

const ProjectDetails = () => {
    const { id } = useParams();
    return (
        <>
        <AnimatedBackground />
        <div>
    {/* <video
      autoPlay
      muted
      loop
      controls
      className="w-full rounded-lg"
    >
      <source src="https://mnuhdfulimayebkvchyh.supabase.co/storage/v1/object/public/techstack-icons//Screen%20Recording%202025-06-19%20164911.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
        </div>
        </>
    )
}

export default ProjectDetails