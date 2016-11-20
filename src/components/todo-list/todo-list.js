import { List } from "immutable";
import React, { PropTypes, PureComponent } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import Todo from "./todo";
import AddTodo from "./add-todo";

class TodoList extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func,
    onTodoClick: PropTypes.func,
    todos: ImmutablePropTypes.list
  }

  static defaultProps = {
    todos: List()
  }

  constructor(props) {
    super(props);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleTodoClick(index) {
    if (this.props.onTodoClick) {
      this.props.onTodoClick(index);
    }
  }

  handleAddTodo(todoName) {
    if (this.props.onAddTodo) {
      this.props.onAddTodo(todoName);
    }
  }

  render() {
    const todosListItems = this.props.todos.map((todo, index) => {
      return (
        <li key={`${todo.get("name")}-${index}`}>
          <Todo
            name={todo.get("name")}
            completed={todo.get("completed")}
            index={index}
            onClick={this.handleTodoClick}
          />
        </li>
      );
    });

    return (
      <div>
        <h1>{`${this.props.name}:`}</h1>
        <ul>{todosListItems}</ul>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default TodoList;
