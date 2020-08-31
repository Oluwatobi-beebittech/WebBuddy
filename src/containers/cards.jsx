import React, { Component } from "react";
import { AddItem } from "./addItem";
import { DestroyCard } from "./destroyCard";

class Cards extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="col-md-3 shadow-sm myCard ml-1"
        style={{ backgroundColor: this.props.cardColor }}
      >
        <AddItem />
        <DestroyCard />
      </div>
    );
  }
}

export default Cards;
