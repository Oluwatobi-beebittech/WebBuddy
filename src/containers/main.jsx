import React, { Component } from "react";
import Nav from "./nav";
import AddCards from "./addCards";
import CardRow from "./cardRow";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        { cardKey: 0, cardTitle: 0, listKey: 0, listTitle: 0, listValue: 0 },
      ],
      newCardTitle: "",
    };
    let cardRows = [];
    let cardsPerRow = [];
  }

  handleAddCards = () => {
    console.log("addc");
  };

  handleCardTitleChange = (e) => {
    this.setState({ newCardTitle: e.target.value.trim() });
    console.log(this.state.newCardTitle);
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <AddCards
          addCard={this.handleAddCards}
          onChangeCardTitle={this.handleCardTitleChange}
          newCardTitle = {this.state.newCardTitle}
        />
        <div className="container mt-2">
          <CardRow />
          <CardRow />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
