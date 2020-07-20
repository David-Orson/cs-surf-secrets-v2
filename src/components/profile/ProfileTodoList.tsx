import React, { Component } from "react";
import Todo from "../profile/Todo";

export class ProfileTodoList extends Component<any, any> {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let todos = this.props.data;
    let todomarkup = todos.map((todo: any) => (
      <Todo key={todo.todoId} todo={todo} />
    ));
    return (
      <div id="todo-list">
        <ul>
          <li>Record</li>
          <li>Map</li>
          <li>Zone</li>
          <li>Server</li>
        </ul>
        {todomarkup}
      </div>
    );
  }
}

export default ProfileTodoList;
