import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/Authcontext";

const ForgotPass = () => {
  const { resetPass } = useContext(AuthContext);
  const handleresetPass = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
     try {
      await resetPass(email);
      alert("✅ Password reset email sent. Check your inbox.");
    } catch (err) {
      console.error(err.message);
      alert("❌ Failed to send reset email.");
    }
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-lg">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Forgot Password</h1>
          <p>Enter your email address and we’ll send you a reset link.</p>
          <form onSubmit={handleresetPass}>
            <fieldset className="fieldset">
              <label className="label text-black  text-base">Email</label>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="Email"
              />

              <button type="submit" className="btn btn-primary mt-4 text-white">
                Send Verification Mail
              </button>

              <p>
                Remember your password?
                <Link to={"/login"}>
                  <span className="hover:underline text-blue-500"> Login</span>{" "}
                </Link>
              </p>
            </fieldset>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
