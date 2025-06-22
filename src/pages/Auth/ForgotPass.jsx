import React from "react";
import { Link } from "react-router";

const ForgotPass = () => {
  return (
    <div>
      <div className="card bg-base-100  shadow-lg">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Forgot Password</h1>
          <p>Enter your email address and we’ll send you a reset link.</p>
          <fieldset className="fieldset">
            <label className="label text-black  text-base">Email</label>
            <input
              type="email"
              className="input focus:outline-none"
              placeholder="Email"
            />

            <button className="btn btn-primary mt-4 text-white">
              Send Verification Mail
            </button>
            <p>
              Remember your password?
              <Link to={"/login"}>
                <span className="hover:underline text-blue-500"> Login</span>{" "}
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
