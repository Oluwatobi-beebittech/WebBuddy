import React, { Component } from "react";
import Nav from "./nav";
import AddCards from "./addCards";
import CardRow from "./cardRow";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [,],
      newCardTitle: "",
      newItemTitle: "",
      newItemDescription: "",
    };
    let cardRows = [];
    let cardsPerRow = [];
  }

  generateKey = (salt) => {
    let saltArith = salt.length - 1 - (salt.length - 1) / 2;
    let sub = salt.substr(0, saltArith);
    return sub;
  };

  handleAddCards = (cardTitle) => {
    this.setState((state, props) => ({
      cards: state.cards.append({
        cardKey: this.generateKey(state.newCardTitle),
        cardTitle: state.newCardTitle,
        lists: [],
      }),
    }));
  };//{ listKey: "", listTitle: "", listValue: "" }

  handleCardTitleChange = (e) => {
    this.setState({ newCardTitle: e.target.value.trim() });
    console.log(this.state.newCardTitle);
  };

  handleItemTitleChange = (e) => {
    this.setState({ newItemTitle: e.target.value.trim() });
  };

  handleItemDescriptionChange = (e) => {
    this.setState({ newItemDescription: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <AddCards
          addCard={this.handleAddCards}
          onChangeCardTitle={this.handleCardTitleChange}
          newCardTitle={this.state.newCardTitle}
        />
        <div className="container mt-2">
          <CardRow
            onChangeItemTitle={this.handleItemTitleChange}
            onChangeItemDescription={this.handleItemDescriptionChange}
            newItemTitle={this.state.newItemTitle}
            newItemDescription={this.state.newItemDescription}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
