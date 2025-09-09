import { useState } from "react";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import { MdAssignment } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "Open",
    className: "badge--success",
  },
  CLOSED: {
    label: "Close",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index, isAdminRoute }) {
  const { status, title, deadline, budget } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{budget}</td>
      <td>{new Date(deadline).toLocaleDateString("en")}</td>
      <td>
        {
          <span className={`badge ${projectStatus[status].className}`}>
            {projectStatus[status].label}
          </span>
        }
      </td>
      {!isAdminRoute && (
        <td>
          <button onClick={() => setOpen(true)}>
            <MdAssignment className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={`Send Proposal For "${title}"`}
          >
            <CreateProposal
              onClose={() => setOpen(false)}
              projectId={project._id}
            />
          </Modal>
        </td>
      )}
    </Table.Row>
  );
}

export default ProjectRow;
