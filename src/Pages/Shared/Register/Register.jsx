import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  const { createUser, createProfile } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setFirebaseError("");

    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    }

    createUser(email, password)
      .then(result => {
        const CreateUser = result.user;
        console.log(CreateUser);
        createProfile(name, photo)
          .then(result => {})
          .catch(error => {});
        form.reset();
      })
      .catch(error => {
        const errorMessage = error.message;
        setFirebaseError(errorMessage);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Form!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-xl ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Name *"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                type="text"
                name="photo"
                placeholder="Photo URL *"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email *"
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
                placeholder="Password *"
                className="input input-bordered"
              />
            </div>
            <p className="text-warning">{error}</p>
            <p className="text-warning">{firebaseError}</p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent  text-white">
                Register
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
              Already have an account?
              <Link to="/login" className="font-bold underline">
                {" "}
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
