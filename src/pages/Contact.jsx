import { useForm } from "react-hook-form";
import TextField from "../ui/TextField";

function Contact() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-secondary-0 h-full flex flex-col items-center">
      <h1 className="font-bold text-xl md:text-3xl text-secondary-700 mt-28 md:mt-20">
        Contact Us
      </h1>
      <form
        action=""
        className="mx-auto container h-full space-y-8 md:w-1/3 px-4 pb-8"
      >
        <TextField
          label="Full Name"
          name="full-name"
          register={register}
          validationSchema={{
            required: "Full name is required!",
            minLength: {
              value: 10,
              message: "Length must be more than 10 characters.",
            },
          }}
          required
          errors={errors}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          register={register}
          validationSchema={{
            required: "email is required!",
            minLength: {
              value: 10,
              message: "Length must be more than 10 characters.",
            },
          }}
          required
          errors={errors}
        />

        <div>
          <label className="mb-2 block text-secondary-700" htmlFor="desciption">
            Description <span className="text-error">*</span>
          </label>
          <textarea
            rows="5"
            cols="33"
            name="description"
            id="description"
            autoComplete="off"
            className="text-field--input resize-none"
          />
        </div>

        <button className="btn btn--primary w-full">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
