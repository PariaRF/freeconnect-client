import { FiMenu } from "react-icons/fi";
import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import { useSidebar } from "../context/SidebarContext";
import { NavLink, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";

function Header() {
  const { isLoading } = useUser();
  const { toggleSidebar } = useSidebar();
  const location = useLocation();
  const role = location.pathname.split("/")[1];

  return (
    <div className="flex items-center justify-between bg-secondary-0 py-4 px-4 lg:px-8 border-b border-secondary-200">
      <button onClick={toggleSidebar} className="md:hidden text-secondary-600">
        <FiMenu size={24} />
      </button>
      <div
        className={`container p-0 xl:max-w-screen-lg flex items-center justify-end gap-x-2 lg:gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <UserAvatar />
        <NavLink to="/" state={role} className="text-secondary-600">
          <HiHome className="w-5 h-5" />
        </NavLink>
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
