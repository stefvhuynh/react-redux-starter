import React, { PureComponent } from "react";
import { TodoListContainer } from "../containers";

class TodosPage extends PureComponent {
  render() {
    return (
      <div>
        <TodoListContainer/>
      </div>
    );
  }
}

export default TodosPage;
