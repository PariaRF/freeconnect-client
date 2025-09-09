import { FiMenu } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const location = useLocation();

  useEffect(() => {
    setRole(location.state || "");
  }, [location.state]);

  return (
    <div className="bg-secondary-0">
      <nav className="w-full shadow-md text-xl text-secondary-700 border-b-2 border-secondary-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-secondary-0">
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </button>
          <div className="text-2xl font-bold">
            <span>FreeConnect</span>
          </div>

          <ul className="hidden md:flex md:items-center space-x-6 font-medium bg-secondary-0">
            <li className="flex justify-center items-center">
              <DarkModeToggle />
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary-400 font-semibold"
                    : "hover:text-secondary-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={role ? `/${role}/dashboard` : "/auth"}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary-400 font-semibold"
                    : "hover:text-secondary-400"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary-400 font-semibold"
                    : "hover:text-secondary-400"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary-400 font-semibold"
                    : "hover:text-secondary-400"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary-400 font-semibold"
                    : "hover:text-secondary-400"
                }
              >
                Signin/Singup
              </NavLink>
            </li>
          </ul>
        </div>

        {/* mobile mode */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-secondary-0 shadow-2xl text-secondary-500 transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-3 border-b-2 border-secondary-200">
            <div className="flex justify-center items-center tracking-widest text-2xl font-bold ">
              FreeConnect
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <span className="text-error font-bold text-xl">X</span>
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            <NavLink to="/" className="hover:text-blue-600">
              Home
            </NavLink>
            <NavLink to={`/${role}/dashboard`} className="hover:text-blue-600">
              Dashboard
            </NavLink>
            <NavLink to="/aboutus" className="hover:text-blue-600">
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-600">
              Contact
            </NavLink>
            <NavLink to="/auth" className="hover:text-blue-600">
              Signin/Signup
            </NavLink>
          </nav>
        </aside>
      </nav>
    </div>
  );
}

export default MainHeader;
