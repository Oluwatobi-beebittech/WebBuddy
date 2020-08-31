import React, { Component } from "react";

export class AddItem extends Component {
  render() {
    return (
      <a className="btn">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-plus-circle-fill"
          fill="#007bff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
      </a>
    );
  }
}
