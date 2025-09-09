import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

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

function ProposalRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration} days</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
