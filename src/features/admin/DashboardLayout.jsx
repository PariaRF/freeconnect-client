import useProjects from "../../hooks/useProjects";
import AdminDashboard from "../../pages/AdminDashboard";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUser from "./useUser";

function DashboardLayout() {
  const { isLoading: isProposalsLoading, proposals } = useProposals();
  const { isLoading: isProjectsLoading, projects } = useProjects();
  const { isLoading: isUsersLoading, users } = useUser();

  if (isProposalsLoading || isProjectsLoading || isUsersLoading)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
