import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoListContainer from "./containers/todo-list-container";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoListContainer/>
      </div>
    </Provider>
  );
};

export default App;
