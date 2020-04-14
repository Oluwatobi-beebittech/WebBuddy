import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <a href = "#">
          <svg
            class="bi bi-plus-square-fill"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="#008aff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
              clip-rule="evenodd"
            />
          </svg>
          </a>
        </div>
        <div class="container">ds</div>
      </div>
    );
  }
}

export default Counter;
