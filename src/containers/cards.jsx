import React, { Component } from "react";
import { AddItem } from "./addItem";
import { DestroyCard } from "./destroyCard";
import { ListItem } from "./listItem";
import { Accordion } from "react-bootstrap";
let white = "red";
class Cards extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="col-md-3 shadow-sm px-0 pb-2"
          style={{ backgroundColor: this.props.cardColor }}
        >
          <div
            className="w-100 mx-auto"
            style={{ backgroundColor: this.props.cardColor }}
          >
            <p className="d-inline ml-2">
              <b>Title</b>
            </p>
            <AddItem />
            <DestroyCard />
          </div>
          <div className="myCard">
            <Accordion>
              <ListItem />
            </Accordion>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
