import useOwnerProjects from "./useOwnerProjects";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import truncateText from "../../utils/truncateText";

function ProjectTablev1() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="projects" />;

  return (
    <div>
      {projects.length && (
        <div className="bg-secondary-0 overflow-x-auto">
          <table>
            <thead>
              <tr className="title-row">
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th>Tags</th>
                <th>Freelancer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project._id}>
                  <td>{index + 1}</td>
                  <td>{truncateText(project.title, 30)}</td>
                  <td>{project.category?.title}</td>
                  <td>{project.budget}</td>
                  <td>{new Date(project.deadline).toLocaleDateString("en")}</td>
                  <td>
                    {project.tags.map((tag) => (
                      <span className="badge badge--secondary" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td>{project.freelancer?.name || "-"}</td>
                  <td>
                    {project.status === "OPEN" ? (
                      <span className="badge badge--success">Open</span>
                    ) : (
                      <span className="badge badge--danger">Close</span>
                    )}
                  </td>
                  <td>...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProjectTablev1;
