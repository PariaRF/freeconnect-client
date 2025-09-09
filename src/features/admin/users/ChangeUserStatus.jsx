import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    label: "Rejected",
    value: 0,
  },
  {
    label: "Waiting for confirmation",
    value: 1,
  },
  {
    label: "confirmed",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUsersLoading, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form className="space-y-9" onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="Change status"
          register={register}
          required
          options={options}
        />
        <div>
          {isUsersLoading ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
