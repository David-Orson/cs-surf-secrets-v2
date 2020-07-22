import React, { Component } from "react";

export class Todo extends Component<any, any> {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.todo.record}</li>
          <li>{this.props.todo.course}</li>
          <li>{this.props.todo.zone}</li>
          <li>{this.props.todo.server}</li>
        </ul>
      </div>
    );
  }
}

export default Todo;
