import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="bg-secondary-0 h-full">
      <div className="flex flex-col justify-center items-center text-secondary-700 p-4 text-center gap-y-4">
        <h2 className=" text-2xl md:text-4xl font-bold mt-16 md:mt-40">
          Easily register projects and recive projects.
        </h2>
        <span className="text-secondary-500 mb-4">
          The most reliable communication platform between freelancers and
          employers
        </span>
        <NavLink to="/auth" className="btn btn--primary">
          Click to start
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
