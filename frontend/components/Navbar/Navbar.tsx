import React from "react";

const navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-t-2xl pt-10 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:bg-emerald-100">
              <a>Homepage</a>
            </li>
            <li className="hover:bg-emerald-100">
              <a>Take a Test</a>
            </li>
            <li className="hover:bg-emerald-100">
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Wellness</a>
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-emerald-200">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeAEkoOYNLaHMbdGLXsdMlL_q95iW-8W6mRoUx9YUS2AmQDNBaJ60YBKjGmCLbdu9GnjLU3Hk3of13Iby4OeG_dxYMf3O0eSNg-Z3_zN3rzWDl7dYZyVzIrklqhhCgHnzyY_bV4pz8imlRnivLnuD0zzD4-2qSku9oZhFvrCrhwrqS_st4YaR0kOh99w/s542/images%20(5)%20(12).jpeg"
              />
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
};

export default navbar;
