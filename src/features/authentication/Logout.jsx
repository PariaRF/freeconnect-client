import { HiOutlineArrowRight } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiOutlineArrowRight className="w-5 h-5 text-secondary-600 hover:text-error hover:cursor-pointer" />
    </button>
  );
}

export default Logout;
