import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-white text-black w-full fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-10"
          >
            <li className=" text-xl text-white">Home</li>
            <li className=" text-xl text-white">About</li>
            <li className=" text-xl text-white">Products</li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Todo App</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-8">
          <li className=" text-xl">Home</li>
          <li className=" text-xl">About</li>
          <li className=" text-xl">Products</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="py-2 px-5 border-none  bg-orange-500 rounded-lg hover:bg-black hover:text-white text-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
