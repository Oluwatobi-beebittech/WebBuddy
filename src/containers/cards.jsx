import React, { Component } from "react";
import { AddItem } from "./addItem";
import { DestroyCard } from "./destroyCard";
import {ListItem} from "./listItem";
import {Accordion} from "react-bootstrap";
 
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
        id="me"
      >
        <AddItem />
        <DestroyCard />
        <Accordion>
          <ListItem />
        </Accordion>
      </div>
    );
  }
}

export default Cards;
