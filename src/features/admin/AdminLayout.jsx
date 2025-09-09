import {
  HiCollection,
  HiDocumentText,
  HiFolder,
  HiOutlineViewGrid,
  HiUsers,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiCollection />
          <span>Dashboard</span>
        </CustomNavLink>

        <CustomNavLink to="users">
          <HiUsers />
          <span>Users</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiFolder />
          <span>Projects</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiDocumentText />
          <span>Proposals</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
