import React, { PropTypes, PureComponent } from "react";

class AddTodo extends PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onTodoNameChange = this.onTodoNameChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.state = { todoName: "" }
  }

  onTodoNameChange(event) {
    event.preventDefault();
    this.setState({ todoName: event.currentTarget.value });
  }

  onAddClick(event) {
    event.preventDefault();
    this.props.onAddTodo && this.props.onAddTodo(this.state.todoName);
    this.setState({ todoName: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.onTodoNameChange}
        />
        <button onClick={this.onAddClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
