import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { isCreating, createProposal } = useCreateProposal();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Description"
          name="description"
          register={register}
          validationSchema={{
            required: "Description is required!",
            minLength: {
              value: 10,
              message: "Length must be more than 10 characters.",
            },
          }}
          required
          errors={errors}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          register={register}
          validationSchema={{
            required: "Price is required!",
          }}
          required
          errors={errors}
        />
        <TextField
          label="Duration"
          name="duration"
          type="number"
          register={register}
          validationSchema={{
            required: "Duration is required!",
          }}
          required
          errors={errors}
        />
        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              Submitt
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
