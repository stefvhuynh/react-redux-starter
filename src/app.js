import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { browserHistory, Route, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import store from "./redux/store";
import routes from "./routes";
import { requestTodos } from "./redux/modules/todos";
import TodosPage from "./pages/todos-page";
import RootPage from "./pages/root-page";

const history = syncHistoryWithStore(browserHistory, store);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path={routes.root.path} component={RootPage}>
            <Route
              path={routes.todos.path}
              component={TodosPage}
              onEnter={() => store.dispatch(requestTodos())}
            />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
