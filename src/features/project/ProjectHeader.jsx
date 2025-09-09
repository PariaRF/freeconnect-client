import { HiArrowLeft } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowLeft className="w-5 h-5 text-secondary-500" />
      </button>
      <h2 className="font-black text-secondary-700 text-xl">
        List of <span className="font-bold underline"> {project.title} </span>{" "}
        requests
      </h2>
    </div>
  );
}

export default ProjectHeader;
