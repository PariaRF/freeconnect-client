import useOwnerProjects from "./useOwnerProjects";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="projects" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Title</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th>Requests</th>
        <th>Status</th>
        <th>Actions</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
