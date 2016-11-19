import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import todos, { todosSaga } from "./modules/todos";

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(
  sagaMiddleware
);
const rootReducer = combineReducers({
  ...todos
});
const store = createStore(rootReducer, middlewares);

const rootSaga = function* () {
  yield [
    todosSaga()
  ];
};
sagaMiddleware.run(rootSaga);

export default store;
