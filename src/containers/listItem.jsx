import React, { Component } from "react";
import { Accordion, Card, Button, Modal } from "react-bootstrap";

const white = "#fff";

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteListChecked: false,
    };
  }

  handleShowModal = (value) => {
    this.setState({show: value});
  }

  handleDeleteCheck = (e) => {
    this.setState({deleteListChecked: e.target.checked});
  }

  handleDeleteItem = (e) => {
    e.preventDefault();
    this.handleShowModal(false);
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Header style={{ backgroundColor: white }}>
            <div className="float-right">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
              <a className="btn" onClick={() => this.handleShowModal(true)}>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-bookmark-x-fill"
                  fill="#e0a800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm2.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
                  />
                </svg>
              </a>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.handleShowModal(false)}
          ariaLabelledBy="delete-item"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="delete-item">Delete Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-row">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    value=""
                    id="delete-check"
                    onChange={this.handleDeleteCheck}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="delete-check"
                  >
                    Delete
                  </label>
                </div>
              </div>

              <div className="col-md-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.handleDeleteItem}
                  disabled={!this.state.deleteListChecked}
                >
                  Delete
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
