import { connect } from "react-redux";
import TodoList from "../components/todo-list";
import { addTodo, getTodos, toggleTodo } from "../redux/modules/todos";

const TodoListContainer = connect(
  (state) => {
    return {
      name: "Stuff to do",
      todos: getTodos(state)
    };
  },
  (dispatch) => {
    return {
      onTodoClick: (index) => dispatch(toggleTodo(index)),
      onAddTodo: (todoName) => dispatch(addTodo(todoName))
    };
  }
)(TodoList);

export default TodoListContainer;
