import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const [firebaseError, setFirebaseError] = useState("");

  const { loggedUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLoggedInUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset("");

    loggedUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorMessage = error.message;
        setFirebaseError(errorMessage);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        const githubUser = result.user;
        console.log(githubUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Form!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-xl">
          <div className="card-body">
            <form onSubmit={handleLoggedInUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <p className="text-warning mt-2">{firebaseError}</p>
              <div className="form-control mt-4">
                <button type="submit" className="btn btn-accent text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control">
              <button
                onClick={handleGoogleSingIn}
                type="submit"
                className="btn btn-outline"
              >
                <FcGoogle className="mr-1" size={24} />
                google SignIn
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={handleGithubSignIn}
                type="submit"
                className="btn btn-outline"
              >
                <FaGithub className="mr-1" size={24} /> Github signIn
              </button>
            </div>
            <p className="text-[#BDBDBD] font-semibold">
              By signing up, you agree to our
              <Link to="/terms" className="font-bold underline">
                {" "}
                Terms of Service.
              </Link>
            </p>
            <p className="text-[#BDBDBD] font-semibold mt-[-10px]">
              Don't have an account?
              <Link to="/register" className="font-bold underline">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
