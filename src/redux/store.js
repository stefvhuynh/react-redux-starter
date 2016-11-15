import { combineReducers, createStore } from "redux";
import todos from "./modules/todos";

const rootReducer = combineReducers({
  todos
});
const store = createStore(rootReducer);

export default store;
