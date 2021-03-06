import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-md bg-site-purple">
        <svg
          className="bi bi-file-check"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
          <path
            fillRule="evenodd"
            d="M15.854 2.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 4.793l2.646-2.647a.5.5 0 01.708 0z"
            clipRule="evenodd"
          />
        </svg>
        <a className="navbar-brand text-white ml-md-n5 ml-lg-2" >
          WebBuddy
        </a>
      </nav>
    );
  }
}

export default Nav;
