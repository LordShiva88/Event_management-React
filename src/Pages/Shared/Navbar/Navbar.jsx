import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import userIcon from "../../../assets/user.png";
import { useContext } from "react";
import { UserAuthContext } from "../../../AuthContext/AuthContext";
import toast from "react-hot-toast";
import logo from "../../../assets/log.png";

const Navbar = () => {
  const { logOut, currentUser } = useContext(UserAuthContext);

  const handleSignOut = () => {
    return logOut()
      .then(() => toast.success("Successfully LogOut!"))
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shopping"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Shopping
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-[#eb347a]":"")}
        >
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:px-12 md:px-6 navbar bg-gray-800 text-gray-50 nav">
      <div className="hidden md:flex ">
        <img src={logo} className="w-36" />
        <h1 className="text-xl font-bold text-[#eb347a]">Music</h1>
      </div>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars className="text-2xl"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-5 space-y-3 shadow bg-base-200 text-black rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="px-1 flex gap-10">{navLink}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="w-10 rounded-full border">
                {currentUser ? (
                  <img src={currentUser?.photoURL} />
                ) : (
                  <img src={userIcon} />
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="ml-5">
          {currentUser ? (
            <button
              onClick={handleSignOut}
              className="btn btn-error btn-outline"
              to={"/login"}
            >
              Logout
            </button>
          ) : (
            <Link className="btn btn-error btn-outline" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
