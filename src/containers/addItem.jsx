import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleShowModal = (value) => {
    console.log("entered");
    this.setState({ show: value });
  };

  handleCreateItem = (e) => {
    e.preventDefault();
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
            className="bi bi-plus-circle-fill"
            fill="#007bff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
            />
          </svg>
        </a>

        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.handleShowModal(false)}
          ariaLabelledBy="create-item"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="create-item">Add an Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="item-title">Item Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="item-title"
                    placeholder="Item Title"
                    onChange={this.props.onChangeItemTitle}
                    value={this.props.newItemTitle}
                    maxLength={20}
                    ariaDescribedBy="itemTitleHelpText"
                  />
                  <small
                    id="itemTitleHelpText"
                    className="form-text text-muted float-right"
                  >
                    {this.props.newItemTitle.length}/20
                  </small>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="item-data">Item Details</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="item-data"
                    placeholder="Description of the item"
                    rows="3"
                    onChange={this.props.onChangeItemDescription}
                    value={this.props.newItemDescription}
                    maxLength={100}
                    ariaDescribeBy="itemDescriptionHelpText"
                  ></textarea>
                  <small
                    id="itemDescriptionHelpText"
                    className="form-text text-muted float-right"
                  >
                    {this.props.newItemDescription.length}/100
                  </small>
                </div>
              </div>

              <div className="col-md-6 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleCreateItem}
                  disabled={this.props.newItemTitle.trim() === ""}
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
