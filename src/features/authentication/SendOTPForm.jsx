import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { NavLink } from "react-router-dom";

function SendOTPForm({ register, onSubmit, isSendingOtp }) {
  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField
          label="Email"
          name="phoneNumber"
          type="email"
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button
              type="submit"
              disabled={isSendingOtp ? true : false}
              className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-promary-300"
            >
              Send Verification Code
            </button>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <NavLink to="/" className="text-sm md:text-base text-secondary-700">
            Home page
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
