import React, { PropTypes, PureComponent } from "react";
import Radium from "radium";

class Todo extends PureComponent {
  static propTypes = {
    completed: PropTypes.bool,
    index: PropTypes.number,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(this.props.index);
    }
  }

  render() {
    return (
      <div
        style={[styles.base, this.props.completed ? styles.completed : {}]}
        onClick={this.handleClick}
      >
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Radium(Todo);

const styles = {
  base: {
    cursor: "pointer",
    ":hover": {
      background: "yellow"
    }
  },
  completed: {
    textDecoration: "line-through",
  }
};
