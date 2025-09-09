import { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const { handleSubmit, register, watch } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const { phoneNumber } = location.state || {};
  let email = "";
  useEffect(() => {
    watch("phoneNumber");
    email = phoneNumber;
  }, [phoneNumber]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (!user.status !== 2) {
        navigate("/");
        toast("Your profile is awaiting approval.", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:max-w-sm space-y-8"
      >
        <TextField
          label="Full Name"
          name="name"
          register={register}
          validationSchema={{ required: "This field is required!" }}
        />

        <div className="flex items-center justify-center gap-x-5">
          <RadioInput
            label="Owner"
            value="OWNER"
            register={register}
            validationSchema={{
              required: "Choosing a role is reqiured!",
            }}
            name="role"
            watch={watch}
            // checked={watch("role") === "OWNER"}
          />
          <RadioInput
            label="Freelancer"
            value="FREELANCER"
            register={register}
            name="role"
            validationSchema={{
              required: "Choosing a role is reqiured!",
            }}
            watch={watch}
            // checked={watch("role") === "FREELANCER"}
          />
        </div>
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
