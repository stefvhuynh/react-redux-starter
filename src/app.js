import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { requestTodos } from "./redux/modules/todos";
import TodoListContainer from "./containers/todo-list-container";

const initialize = () => {
  store.dispatch(requestTodos());
};

class App extends PureComponent {
  componentDidMount() {
    initialize();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoListContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
