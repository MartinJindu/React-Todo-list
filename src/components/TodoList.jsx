import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    // Destructuring props
    /* When passing the handleDelete to TodoItem we have to reference the id. and we do it in an arrow func to avoid execution during transition*/
    const { items, clearList, handleDelete, handleEdit } = this.props;
    //console.log(items);
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {items.map((item) => {
          //console.log(item);
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              handleEdit={() => {
                handleEdit(item.id);
              }}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
