import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100  shadow-lg">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p>Login with MoveSwift</p>
          <fieldset className="fieldset">
            <label className="label text-black  text-base">Email</label>
            <input
              type="email"
              className="input focus:outline-none"
              placeholder="Email"
            />
            <label className="label text-black  text-base">Password</label>
            <input
              type="password"
              className="input focus:outline-none"
              placeholder="Password"
            />
            <div>
              {" "}
              <Link to={'/forgotpassword'}>
              <button className="link link-hover">Forgot password?</button>
              </Link>
            </div>
            <button className="btn btn-primary mt-4 text-white">Login</button>
            <p>
              Don’t have any account?{" "}
              <Link to={"/register"}>
                <span className="hover:underline text-blue-500">Register</span>{" "}
              </Link>
            </p>
          </fieldset>
          <div className="divider">OR</div>

          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
