import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import PropTypes from "prop-types";
class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({
      text: "",
      description: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Your Task</Label>
          <Input
            type="text"
            placeholder="do some code"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Describe Task</Label>
          <Input
            type="textarea"
            placeholder="Write some short description about your task"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};
export default CreateTodoForm;
