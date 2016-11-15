import { List } from "immutable";
import React, { PropTypes, PureComponent } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import Todo from "./todo";
import AddTodo from "./add-todo"

class TodoList extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    todos: ImmutablePropTypes.list,
    onTodoClick: PropTypes.func,
    onAddTodo: PropTypes.func
  }

  static defaultProps = {
    todos: List()
  }

  constructor(props) {
    super(props);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onTodoClick(index) {
    this.props.onTodoClick && this.props.onTodoClick(index);
  }

  onAddTodo(todoName) {
    this.props.onAddTodo && this.props.onAddTodo(todoName);
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
        <AddTodo onAddTodo={this.onAddTodo}/>
      </div>
    );
  }
}

export default TodoList;
