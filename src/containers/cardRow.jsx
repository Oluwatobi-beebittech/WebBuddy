import React, { Component } from "react";
import Cards from "./cards";


class CardRow extends Component {


  render() {
    let cards = this.props.cards.map((card) => (
      <Cards
        cardColor={card.cardColor}
        cardTitle={card.cardTitle}
        cardItem={card.lists}
        card={card}
        key={card.cardKey}
        id={card.cardKey}
        onCreateItem = {this.props.onCreateItem}
        onChangeItemTitle={this.props.onChangeItemTitle}
        onChangeItemDescription={this.props.onChangeItemDescription}
        onCardDelete={this.props.onCardDelete}
        onItemDelete={this.props.onItemDelete}
        newItemTitle={this.props.newItemTitle}
        newItemDescription={this.props.newItemDescription}

      />
    ));
    return <div className="row justify-content-around mt-2">{cards}</div>;
  }
}

export default CardRow;
