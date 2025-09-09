import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
import useLogout from "../features/authentication/useLogout";

function HeaderMenu() {
  const { isPending, logout } = useLogout();
  return (
    <ul className="flex gap-x-2 lg:gap-x-4 items-center">
      {/* <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser />
        </Link>
      </li> */}
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout onClick={logout} disabled={isPending} title="Logout" />
      </li>
    </ul>
  );
}

export default HeaderMenu;
