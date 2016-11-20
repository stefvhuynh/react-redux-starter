import { connect } from "react-redux";
import { push } from "react-router-redux";
import routes from "../routes";
import Navigation from "../components/navigation";

const NavigationContainer = connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {
      onTodosLinkClick: () => dispatch(push(routes.todos.path))
    };
  }
)(Navigation);

export default NavigationContainer;
