import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        const loggedOut = result.user;
        console.log(loggedOut);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const navMenu = (
    <>
      <li className="mx-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#042f2e] text-neutral-content">
      <div className="lg:mx-48">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>
            <Link to="/" className="font-bold text-2xl">
              Master chef
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-4">{navMenu}</ul>
          </div>
          <div className="navbar-end">
            {user && (
              <label className="btn btn-ghost btn-circle avatar mr-4">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL}
                    title={user?.displayName}
                    alt="user photo"
                  />
                </div>
              </label>
            )}
            {user ? (
              <button onClick={handleLogOut} className="btn">
                LogOut
              </button>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
