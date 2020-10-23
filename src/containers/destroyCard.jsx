import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class DestroyCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      deleteCardChecked: false
    };
  }

  handleShowModal = (value) => {
    this.setState({ show: value });
  }

handleDeleteCheck = (e) => {
  this.setState({ deleteCardChecked: e.target.checked})
}

  handleDeleteCard = (e) => {
    e.preventDefault();
    this.props.onCardDelete(this.props.cardKey);
    this.handleShowModal(false);
  };

  render() {
    return (
      <React.Fragment>
        <a className="btn float-right" onClick={() => this.handleShowModal(true)}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle-fill"
            fill="#ff5353"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </a>
        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.handleShowModal(false)}
          ariaLabelledBy="delete-card"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="delete-card">Delete Card</Modal.Title>
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
                    onChange = {this.handleDeleteCheck}
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
                  onClick={this.handleDeleteCard} 
                 disabled={!this.state.deleteCardChecked}
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
