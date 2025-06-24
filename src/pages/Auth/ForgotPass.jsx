import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/Authcontext";
import { useForm } from "react-hook-form"; 
import Swal from "sweetalert2"; 

const ForgotPass = () => {
  const { resetPass } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  const handleresetPass = async ({ email }) => {
    try {
      await resetPass(email);
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Check your inbox for the reset link.",
      });
    } catch (err) {
      console.error(err.message);

      
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not send password reset email.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 shadow-lg w-full max-w-md">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Forgot Password</h1>
          <p>Enter your email address and we’ll send you a reset link.</p>

          <form onSubmit={handleSubmit(handleresetPass)}>
            <fieldset className="fieldset space-y-3">
              <label className="label text-black text-base">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="input focus:outline-none"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <button type="submit" className="btn btn-primary mt-4 text-white w-full">
                Send Verification Mail
              </button>

              <p className="mt-2">
                Remember your password?
                <Link to="/login">
                  <span className="hover:underline text-blue-500"> Login</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
