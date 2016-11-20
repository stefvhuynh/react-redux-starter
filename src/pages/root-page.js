import React, { PureComponent } from "react";
import NavigationContainer from "../containers/navigation-container";

class RootPage extends PureComponent {
  render() {
    return (
      <div>
        <NavigationContainer/>
        {this.props.children && this.props.children}
      </div>
    );
  }
}

export default RootPage;
