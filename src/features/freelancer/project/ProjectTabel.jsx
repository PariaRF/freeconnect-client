import { useLocation } from "react-router-dom";
import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTabel() {
  const { isLoading, projects } = useProjects();

  const location = useLocation();
  const isAdminRoute = location.pathname.split("/")[1];

  if (isLoading) return <Loading />;
  if (projects && !projects.length) return <Empty resourceName="project" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>Title</th>
          <th>Budget</th>
          <th>Deadline</th>
          <th>Status</th>
          {!isAdminRoute && <th>Actions</th>}
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow
              key={project._id}
              project={project}
              index={index}
              isAdminRoute={isAdminRoute}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectTabel;
