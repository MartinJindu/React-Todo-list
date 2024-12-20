import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    // Destructuring props from parent class
    // We also conditionally render different button name and color based of editItem toggle using tenary
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="d-grid gap-2">
            <div className="input-group">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>

              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add a todo item"
                value={item} // to set value to the input while typing
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={
                editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
              }
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
