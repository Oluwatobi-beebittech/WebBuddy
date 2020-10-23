import React, { Component } from "react";
import { Accordion, Card, Button, Modal } from "react-bootstrap";
import { DeleteItem } from "./deleteItem";

const white = "#fff";

export class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Header style={{ backgroundColor: white }}>
            <span className="align-bottom">{this.props.list.listTitle}</span>
            <div className="float-right">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={this.props.list.listKey}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-caret-down-square-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"
                  />
                </svg>
              </Accordion.Toggle>
              <DeleteItem
                onItemDelete={this.props.onItemDelete}
                listKey={this.props.list.listKey}
                card={this.props.card}
              />
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.list.listKey}>
            <Card.Body>{this.props.list.listDescription}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </React.Fragment>
    );
  }
}
