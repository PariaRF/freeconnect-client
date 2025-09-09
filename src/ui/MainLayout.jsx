import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <MainHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
