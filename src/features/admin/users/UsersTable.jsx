import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUser from "../useUser";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUser();

  if (isLoading) return <Loading />;
  if (users && !users.length) return <Empty resourceName="User" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          {/* <th>Phone Number</th> */}
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </Table.Header>
        <Table.Body>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UsersTable;
