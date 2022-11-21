import React, { Component } from "react";
import Home from "../home/home.jsx";
export class navbar extends Component {
  render() {
    return (
      // <div className="navbar bg-base-100">
      //   <div className="flex-1">
      //     <a href="navbar" className="btn btn-ghost normal-case text-xl">
      //       Kagiso's Portfolio
      //     </a>
      //   </div>
      //   <div className="flex-none">
      //     <ul className="menu menu-horizontal p-0">
      //       <li>
      //         <a href="navbar">Home</a>
      //       </li>
      //       <li tabIndex={0}>
      //         <li>
      //           <a href="navbar">About</a>
      //         </li>
      //         <li>
      //           <a href="navbar">Resume</a>
      //         </li>
      //       </li>
      //       <li>
      //         <a href="navbar">Contacts</a>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="Home" className="btn btn-ghost normal-case text-xl">
            Kagiso Mamosolla
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle flex justify-center avatar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-menu-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Resume">Resume</a>
              </li>
              <li>
                <a href="Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
