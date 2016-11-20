import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { browserHistory } from "react-router";
import {
  routerMiddleware as createRouterMiddleware,
  routerReducer
} from "react-router-redux";
import todos, { todosSaga } from "./modules/todos";

const routerMiddleware = createRouterMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(
  routerMiddleware,
  sagaMiddleware
);
const rootReducer = combineReducers({
  ...todos,
  routing: routerReducer
});
const store = createStore(rootReducer, middlewares);

const rootSaga = function* () {
  yield [
    todosSaga()
  ];
};
sagaMiddleware.run(rootSaga);

export default store;
