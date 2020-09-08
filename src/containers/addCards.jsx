import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class AddCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShowModal = (value) => {
    this.setState({ show: value });
  };

  handleCreateCard = (e) => {
    e.preventDefault();
    this.handleShowModal(false);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <button
            className="btn btn-primary mx-auto shadow"
            onClick={() => this.handleShowModal(true)}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-plus"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
        </div>

        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.handleShowModal(false)}
          ariaLabelledBy="create-card"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="create-card">Add a Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="card-title">Card Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="card-title"
                    placeholder="Card Title"
                  />
                </div>
              </div>

              <div className="col-md-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleCreateCard}
                >
                  Create
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddCards;
