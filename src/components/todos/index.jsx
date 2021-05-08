import React, { Component } from "react";
import ListView from "../ListView";
import TableView from "../tableView";
import shortid from "shortid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controllers";
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
    isOpenTodoForm: false,
    searchTerm: "",
  };
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleSearch = () => {};

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos,
    });
    this.toggleForm();
  };
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          toggleForm={this.toggleForm}
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
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
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Create New Todo</ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
