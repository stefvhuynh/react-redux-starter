import { connect } from "react-redux";
import TodoList from "../components/todo-list";
import { getTodos, toggleTodo } from "../redux/modules/todos";

const TodoListContainer = connect(
  (state) => {
    return {
      name: "Stuff to do",
      todos: getTodos(state)
    };
  },
  (dispatch) => {
    return {
      onTodoClick: (index) => dispatch(toggleTodo(index))
    };
  }
)(TodoList);

export default TodoListContainer;
