import React, { PropTypes, PureComponent } from "react";

class AddTodo extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleTodoNameChange = this.handleTodoNameChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = { todoName: "" };
  }

  handleTodoNameChange(event) {
    event.preventDefault();
    this.setState({ todoName: event.currentTarget.value });
  }

  handleAddClick(event) {
    event.preventDefault();
    if (this.props.onAddTodo) {
      this.props.onAddTodo(this.state.todoName);
    }
    this.setState({ todoName: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.handleTodoNameChange}
        />
        <button onClick={this.handleAddClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
