import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeRequestStatus from "./ChangeRequestStatus";

const statusStyle = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Waiting for confirmation",
    className: "badge--secondary",
  },
  {
    label: "Confirmed",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index, project }) {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="Change Request Status"
        >
          <ChangeRequestStatus
            projectId={project._id}
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>Change Status</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
