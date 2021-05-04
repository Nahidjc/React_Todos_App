import React, { Component } from "react";
import ListView from "../ListView";
import TableView from "../tableView";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "1",
        text: "main todo",
        description: "Simple todo",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "2",
        text: "main todo",
        description: "Simple todo",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };
  toggleSelect = (todoId) => {};
  toggleComplete = (todoId) => {};
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
