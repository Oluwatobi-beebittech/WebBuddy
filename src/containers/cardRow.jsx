import React, { Component } from "react";
import Cards from "./cards";

const bg = {
  lightPurple: "#D7A9E3",
  lightGreen: "#A8D5BA",
  lightBrown: "#FEF8DD",
};

class CardRow extends Component {
  render() {
    return (
      <div className="row justify-content-around mt-2">
        <Cards cardColor={bg.lightGreen} />
        <Cards cardColor={bg.lightPurple} />
        <Cards cardColor={bg.lightBrown} />
      </div>
    );
  }
}

export default CardRow;
