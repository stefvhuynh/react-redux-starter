import { List } from "immutable";
import React, { PropTypes, PureComponent } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import Todo from "../components/todo";

class TodoList extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    todos: ImmutablePropTypes.list,
    onTodoClick: PropTypes.func
  }

  static defaultProps = {
    todos: List()
  }

  constructor(props) {
    super(props);
    this.onTodoClick = this.onTodoClick.bind(this);
  }

  onTodoClick(index) {
    this.props.onTodoClick && this.props.onTodoClick(index);
  }

  render() {
    const todosListItems = this.props.todos.map((todo, index) => {
      return (
        <li key={`${todo.get("name")}-${index}`}>
          <Todo
            name={todo.get("name")}
            completed={todo.get("completed")}
            index={index}
            onClick={this.onTodoClick}
          />
        </li>
      );
    });

    return (
      <div>
        <h1>{`${this.props.name}:`}</h1>
        <ul>{todosListItems}</ul>
      </div>
    );
  }
}

export default TodoList;
