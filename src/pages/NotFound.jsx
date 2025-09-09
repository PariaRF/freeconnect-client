import { HiArrowLeft } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="min-h-screen secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="sm:max-w-sm flex justify-center items-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              404 Not Found
            </h1>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowLeft className="w-6 h-6 txt-primary-900" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
