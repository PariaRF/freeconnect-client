import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSidebar } from "../context/SidebarContext";

function AppLayout({ children }) {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`h-screen grid grid-rows-[auto_1fr] transition-all duration-300 
  ${isOpen ? "md:grid-cols-[15rem_1fr]" : "md:grid-cols-[3.5rem_1fr]"}
`}
    >
      <div className="z-10">
        <Header />
      </div>
      {children}
      <div className="bg-secondary-100 p-8 overflow-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
