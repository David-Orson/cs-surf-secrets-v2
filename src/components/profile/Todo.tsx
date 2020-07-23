import React, { Component } from "react";

export class Todo extends Component<any, any> {
  render() {
    return (
      <div>
        <ul>
          <li className="todo-li-1">{this.props.todo.record}</li>
          <li className="todo-li">{this.props.todo.course}</li>
          <li className="todo-li-3">{this.props.todo.zone}</li>
          <li className="todo-li-4">{this.props.todo.server}</li>
        </ul>
      </div>
    );
  }
}

export default Todo;
