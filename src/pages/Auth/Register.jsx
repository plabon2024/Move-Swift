import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/Authcontext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { signUp, setUser, signInWithGoogle, user } = useContext(AuthContext);
  const handlegoogleSignup = () => {
    signInWithGoogle();
  };

  const handlesignUp = async (data) => {
    const { name, email, password } = data;

    try {
      const result = await signUp(email, password);
      const user = result.user;

      // Update display name
      await updateProfile(user, {
        displayName: name,
      });

      // Optionally update local user state (if needed)
      setUser({ ...user, displayName: name });

      // Navigate after successful signup
      navigate(location.state ? location.state : "/");
    } catch (error) {
      console.error("Signup error:", error);
      // Optionally show error to user with toast or alert
    }
  };

  useEffect(() => {
    if (user && user.email) {
      navigate(location.state ? location.state : "/");
    }
  }, [user, navigate, location]);
  return (
    <div>
      <div className="card bg-base-100  shadow-lg">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Create an Account</h1>
          <p>Register with MoveSwift</p>
          <form onSubmit={handleSubmit(handlesignUp)}>
            <fieldset className="fieldset">
              <img src="/assets/Frame 2087326255.svg" alt="" />
              <label className="label text-black  text-base ">Name</label>
              <input
                type="name"
                {...register("name", { required: "Name is required" })}
                className="input focus:outline-none"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p> // ✅ Error message
              )}
              <label className="label text-black  text-base">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input focus:outline-none"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p> // ✅ Error message
              )}
              <label className="label text-black  text-base">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
                  },
                })}
                className="input focus:outline-none"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p> // ✅ Error message
              )}
              <div></div>
              <button type="submit" className="btn btn-primary mt-4 text-white">
                Register
              </button>
              <p>
                Already have an account?
                <Link to={"/login"}>
                  <span className="hover:underline text-blue-500"> Login</span>{" "}
                </Link>
              </p>
            </fieldset>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handlegoogleSignup}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
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
            Register with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
