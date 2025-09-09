import { useEffect } from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals, project }) {
  if (!proposals.length) return <Empty resourceName="No Request Found!" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Freelancer</th>
        <th>Dcription</th>
        <th>Delivery time</th>
        <th>Price</th>
        <th>Status</th>
        <th>Actions</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow
            key={proposal._id}
            proposal={proposal}
            index={index}
            project={project}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
