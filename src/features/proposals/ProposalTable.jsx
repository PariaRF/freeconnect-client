import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

import useProposals from "./useProposals";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resourceName="proposals" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Price</th>
        <th>Status</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
