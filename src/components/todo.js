import React, { PropTypes, PureComponent } from "react";

class Todo extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    completed: PropTypes.bool,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onClick && this.props.onClick(this.props.index);
  }

  render() {
    const completed = this.props.completed ? (
      <small>Completed!</small>
    ) : null;

    return (
      <div onClick={this.onClick}>
        <h3>{this.props.name}</h3>
        {completed}
      </div>
    );
  }
}

export default Todo;
