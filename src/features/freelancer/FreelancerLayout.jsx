import { HiCollection, HiDocumentText, HiFolder } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiCollection />
          <span>Dashboard</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiFolder />
          <span>Projects</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiDocumentText />
          <span>Requests</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
