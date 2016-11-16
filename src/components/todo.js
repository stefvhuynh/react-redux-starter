import React, { PropTypes, PureComponent } from "react";

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
    const completed = this.props.completed ? (
      <small>Completed!</small>
    ) : null;

    return (
      <div onClick={this.handleClick}>
        <h3>{this.props.name}</h3>
        {completed}
      </div>
    );
  }
}

export default Todo;
