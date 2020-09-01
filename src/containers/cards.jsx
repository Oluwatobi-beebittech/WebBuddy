import React, { Component } from "react";
import { AddItem } from "./addItem";
import { DestroyCard } from "./destroyCard";
import {ListItem} from "./listItem";
 
class Cards extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="col-md-3 shadow-sm myCard"
        style={{ backgroundColor: this.props.cardColor }}
      >
        <AddItem />
        <DestroyCard />
        <div className = "accordion">
          <ListItem />
        </div>
      </div>
    );
  }
}

export default Cards;
