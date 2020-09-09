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
        <Cards
          cardColor={bg.lightGreen}
          onChangeItemTitle={this.props.onChangeItemTitle}
          onChangeItemDescription={this.props.onChangeItemDescription}
          newItemTitle={this.props.newItemTitle}
          newItemDescription={this.props.newItemDescription}
        />

        <Cards
          cardColor={bg.lightGreen}
          onChangeItemTitle={this.props.onChangeItemTitle}
          onChangeItemDescription={this.props.onChangeItemDescription}
          newItemTitle={this.props.newItemTitle}
          newItemDescription={this.props.newItemDescription}
        />

        <Cards
          cardColor={bg.lightGreen}
          onChangeItemTitle={this.props.onChangeItemTitle}
          onChangeItemDescription={this.props.onChangeItemDescription}
          newItemTitle={this.props.newItemTitle}
          newItemDescription={this.props.newItemDescription}
        />
      </div>
    );
  }
}

export default CardRow;
