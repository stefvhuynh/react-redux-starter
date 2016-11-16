import { List, Map } from "immutable";
import { createSelector } from "reselect";

// Action types
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// Reducer
const initialState = List([
  Map({ name: "learn redux", completed: false }),
  Map({ name: "learn immutable", completed: false })
]);
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_TODO:
    return state.push(
      Map({ name: action.payload.name, completed: false })
    );
  case TOGGLE_TODO:
    return state.updateIn(
      [action.payload.index, "completed"],
      (completed) => !completed
    );
  default:
    return state;
  }
};
export default { todos: reducer };

// Action creators
export const addTodo = (name) => {
  return { type: ADD_TODO, payload: { name } };
};
export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, payload: { index } };
};

// Selectors
export const getTodos = (state) => state.todos;
export const getCompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => todo.get("completed"))
);
export const getIncompleteTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => !todo.get("completed"))
);
