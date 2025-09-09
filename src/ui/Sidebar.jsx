import { cloneElement, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";
import useIsMobile from "../hooks/useIsMobile";

function Sidebar({ children }) {
  const { isOpen, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  const sidebarRef = useRef(null);

  const childrenWithProps = Array.isArray(children)
    ? children.map((child) => cloneElement(child, { isOpen }))
    : cloneElement(children, { isOpen });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobile &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, isOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`
    ${isOpen ? "w-60" : "w-14"}
    transition-all duration-300 bg-secondary-0 border-r border-secondary-200
    h-full z-50
    fixed top-0 left-0
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0 md:relative md:row-start-1 md:row-span-2 md:z-10
  `}
    >
      <div className="py-[1.01rem] mb-2 relative border-b border-secondary-300 z-50">
        <h1 className="flex justify-center items-center tracking-widest text-xl font-bold text-secondary-500">
          {isOpen ? "FREECONNECT" : "FC"}
        </h1>

        {(isOpen || !isMobile) && (
          <button
            onClick={toggleSidebar}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-secondary-0 border border-secondary-300 rounded-full p-1 shadow transition-all duration-300 hover:scale-105"
          >
            {isOpen ? (
              <FiChevronLeft className="text-secondary-500" size={15} />
            ) : (
              <FiChevronRight className="text-secondary-500" size={15} />
            )}
          </button>
        )}
      </div>
      <ul
        className={`flex flex-col gap-y-4 overflow-hidden ${
          isOpen ? "p-4 " : "p-[0.5rem] flex items-center justify-center"
        }`}
      >
        {childrenWithProps}
      </ul>
    </div>
  );
}

export default Sidebar;
