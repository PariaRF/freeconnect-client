import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Loading from "../../ui/Loading";

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
    label: "Confirmed",
    value: 2,
  },
];

function ChangeRequestStatus({ proposalId, onClose, projectId }) {
  const { register, handleSubmit } = useForm();
  const { isUpdatingProposalStatus, changeProposalStatus } =
    useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
          onClose();
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
          {isUpdatingProposalStatus ? (
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

export default ChangeRequestStatus;
