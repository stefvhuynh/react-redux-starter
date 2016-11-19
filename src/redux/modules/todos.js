import { fromJS, List, Map } from "immutable";
import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { createSelector } from "reselect";
import { fetchTodos as fetchTodosFromApi } from "../../api";

// Action types
const REQUEST_TODOS = "todos/REQUEST_TODOS";
const RECEIVE_TODOS = "todos/RECEIVE_TODOS";
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// Reducer
const initialState = Map({
  requesting: false,
  todos: List()
});
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case REQUEST_TODOS:
    return state.set("requesting", true);
  case RECEIVE_TODOS:
    return state.set("todos", fromJS(action.payload.todos));
  case ADD_TODO:
    return state.get("todos").push(
      Map({ name: action.payload.name, completed: false })
    );
  case TOGGLE_TODO:
    return state.updateIn(
      ["todos", action.payload.index, "completed"],
      (completed) => !completed
    );
  default:
    return state;
  }
};
export default { todos: reducer };

// Action creators
export const requestTodos = () => {
  return { type: REQUEST_TODOS };
};
export const receiveTodos = (todos) => {
  return { type: RECEIVE_TODOS, payload: { todos } };
};
export const addTodo = (name) => {
  return { type: ADD_TODO, payload: { name } };
};
export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, payload: { index } };
};

// Sagas
const fetchTodos = function* () {
  try {
    const response = yield call(fetchTodosFromApi);
    yield put(receiveTodos(response.todos));
  } catch (error) {

  }
};

export const todosSaga = function* () {
  yield [
    takeEvery(REQUEST_TODOS, fetchTodos)
  ];
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
