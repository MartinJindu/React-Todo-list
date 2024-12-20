import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// importing bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid"; // uuid for creating unique id

import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  // To handle change while we type in the input
  handleChange = (e) => {
    this.setState({
      item: e.target.value, // this will set a value to the item for the handle submit to use
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // To prevent page refresh while submitting the form to avoid not capturing the input
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    //console.log(newItem);

    // spreading and adding new item(input) to the state.items
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "", // setting input to empty after updating the state
      id: uuid(),
      editItem: false,
    });
    //console.log(this.items);
  };

  clearList = () => {
    // To clear the todo list
    this.setState({ items: [] });
  };

  handleDelete = (id) => {
    /* using filter, we return items that is not equal to the id provided and set it to this.state.items. we hen pass it down to todo item*/
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: filteredItems });
  };

  handleEdit = (id) => {
    /* We first filter out the item to be edited from the list, then we get the item using find(). We then set the state of items to filteredItem and item to the selectedItem to be edited. 
    
    We want to retain the id and then toggle editItem to true for conditional rendering in TodoInput. After editing and clicking everything goes back to normal and the edited item returns back to the list of items*/
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });

    // this gets the item we want to edit
    const selectedItem = this.state.items.find((item) => {
      return item.id === id;
    });
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
