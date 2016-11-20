import React, { PropTypes, PureComponent } from "react";

class Navigation extends PureComponent {
  static propTypes = {
    onTodosLinkClick: PropTypes.func
  }

  render() {
    return (
      <div>
        <a onClick={this.props.onTodosLinkClick}>To todos >></a>
      </div>
    );
  }
}

export default Navigation;
