import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

const userStatus = [
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

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      {/* <td>{user.phoneNumber}</td> */}
      <td>{user.role}</td>
      <td>
        {
          <span className={`badge ${userStatus[status].className}`}>
            {userStatus[status].label}
          </span>
        }
      </td>
      <td>
        <button onClick={() => setOpen(true)}>Change Status</button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Change User Status"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
