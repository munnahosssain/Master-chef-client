import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const { loggedUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleLoggedInUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loggedUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then(result => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const googleUser = result.user;
        console.log(googleUser);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        const githubUser = result.user;
        console.log(githubUser);
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
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl ">
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
                {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              </div>
              <div className="form-control mt-6">
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
