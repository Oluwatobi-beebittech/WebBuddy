import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class DeleteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteItemChecked: false,
    };
  }

  handleShowModal = (value) => {
    this.setState({ show: value });
  };

  handleDeleteItemCheck = (e) => {
    this.setState({ deleteItemChecked: e.target.checked });
  };

  handleDeleteItem = (e) => {
    e.preventDefault();
    this.props.onItemDelete(this.props.card, this.props.listKey);
    this.handleShowModal(false);
  };

  render() {
    return (
      <React.Fragment>
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
                    id="delete-check-item"
                    onChange={this.handleDeleteItemCheck}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="delete-check-item"
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
                  disabled={!this.state.deleteItemChecked}
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

export default DeleteItem;
