import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shopping"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Shopping
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:px-12 md:px-6 navbar  bg-base-100 nav">
      <h2 className="sm:hidden md:block">Logo</h2>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars className="text-2xl"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="w-10 rounded-full border">
                {/* {currentUser ? (
                  <img src={currentUser?.photoURL} />
                ) : (
                  <img src={userIcon} />
                )} */}
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/bookMark'}>Book Mark</Link>
            </li>
            <li>
              {/* {currentUser ? (
                <button onClick={logOut} to={"/login"} className="">
                  Log Out
                </button>
              ) : (
                <Link to={"/login"} className="">
                  Login
                </Link>
              )} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

