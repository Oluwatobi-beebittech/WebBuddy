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
    let listItems = this.props.cardItem.map((list) => (
      <ListItem
        key={list.listKey}
        list={list}
        onItemDelete={this.props.onItemDelete}
        card={this.props.card}
      />
    ));
    return (
      <React.Fragment>
        <div
          className="col-md-3 shadow px-0 pb-2 mt-3"
          style={{ backgroundColor: this.props.cardColor }}
        >
          <div
            className="w-100 mx-auto"
            style={{ backgroundColor: this.props.cardColor }}
          >
            <p className="d-inline ml-2">
              <b>{this.props.cardTitle}</b>
            </p>
            <AddItem
              cardKey={this.props.id}
              card={this.props.card}
              onCreateItem={this.props.onCreateItem}
              onChangeItemTitle={this.props.onChangeItemTitle}
              onChangeItemDescription={this.props.onChangeItemDescription}
              newItemTitle={this.props.newItemTitle}
              newItemDescription={this.props.newItemDescription}
            />
            <DestroyCard
              cardKey={this.props.id}
              onCardDelete={this.props.onCardDelete}
            />
          </div>
          <div className="myCard">
            <Accordion>{listItems}</Accordion>
          </div>
        </div>
        <div className="col-md-1 mt-3"></div>
      </React.Fragment>
    );
  }
}

export default Cards;
