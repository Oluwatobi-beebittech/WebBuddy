import React, { Component } from "react";
import Nav from "./nav";
import AddCards from "./addCards";
import CardRow from "./cardRow";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      newCardTitle: "",
      newItemTitle: "",
      newItemDescription: "",
    };
    this.bg = ["#D7A9E3", "#A8D5BA", "#FEF8DD"];
  }

  generateKey = () => {
    return Date.now();
  };

  colorPicker = () => {
    const index = Math.floor(Math.random() * 3);
    return this.bg[index];
  };

  handleAddCards = () => {
    const id = this.generateKey();
    const color = this.colorPicker();
    this.setState((state) => ({
      cards: state.cards.concat({
        cardKey: id,
        cardTitle: state.newCardTitle,
        cardColor: color,
        lists: [],
      }),
      newCardTitle: "",
    }));
  }; //{ listKey: "", listTitle: "", listValue: "" }

  handleCardDelete = (cardKey) => {
    const cards = this.state.cards.filter((c) => c.cardKey != cardKey);
    this.setState({ cards: cards });
  };

  handleItemCreate = (card) => {
    const id = this.generateKey();
    const cards = [...this.state.cards];
    const index = cards.indexOf(card);
    cards[index] = { ...card };
    cards[index].lists.push({
      listKey: id,
      listTitle: this.state.newItemTitle,
      listDescription: this.state.newItemDescription,
    });
    console.log(cards);
    this.setState({
      cards: cards,
      newCardTitle: "",
      newItemTitle: "",
      newItemDescription: "",
    });
  };

  handleItemDelete = (card, itemKey) => {
    const cards = [...this.state.cards];
    const index = cards.indexOf(card);
    const items = cards[index].lists.filter((l) => l.listKey != itemKey);
    console.log(items);
    cards[index].lists = items;
    console.log("Here");
    console.log(cards);
    this.setState({
      cards: cards,
      newCardTitle: "",
      newItemTitle: "",
      newItemDescription: "",
    });
  };

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
    // let cardRows = this.state.cards.map((card) => (
    //   <CardRow
    //     onChangeItemTitle={this.handleItemTitleChange}
    //     onChangeItemDescription={this.handleItemDescriptionChange}
    //     newItemTitle={this.state.newItemTitle}
    //     newItemDescription={this.state.newItemDescription}
    //   />
    // ));
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
            cards={this.state.cards}
            onCreateItem={this.handleItemCreate}
            onCardDelete={this.handleCardDelete}
            onItemDelete={this.handleItemDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
