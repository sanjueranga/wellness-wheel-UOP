import React from "react";

const navbar = (props:{userPic?:string}) => (
  <div className="navbar rounded-3xl px-5 mt-10 bg-slate-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="">
            <a>Homepage</a>
          </li>
          <li className="">
            <a href="/physical">Take a Test</a>
          </li>
          <li className="">
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-3xl">Wellness</a>
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar hover:bg-emerald-200"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={props.userPic} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default navbar;
