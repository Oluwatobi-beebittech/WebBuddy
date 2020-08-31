import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/main.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./containers/nav";
import AddCards from "./containers/addCards";
import Cards from "./containers/cards";

const bg = {
  lightPurple: "#D7A9E3",
  lightGreen: "#A8D5BA",
  lightBrown: "#FEF8DD",
};

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <AddCards />
    <div className="container mt-2">
      <div className="row">
        <Cards cardColor={bg.lightGreen} />
        <Cards cardColor={bg.lightGreen} />
        <Cards cardColor={bg.lightGreen} />
        <Cards cardColor={bg.lightGreen} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
