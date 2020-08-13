import React, { Component } from "react";
import Todo from "../profile/Todo";

import { getTodos } from "../../redux/actions/dataActions";
import { connect } from "react-redux";

interface State {
  open: any;
}
export class ProfileTodoList extends Component<any, any> {
  state: State = {
    open: false,
  };

  handleOpener = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
    this.props.getTodos(this.props.handle);
  };

  render() {
    const falseOpen = {
      display: "none",
    };

    const trueOpen = {
      display: "block",
    };

    let todos = this.props.data.todos;
    let todoMarkup = todos ? (
      todos.map((todo: any) => <Todo key={todo.todoId} todo={todo} />)
    ) : (
      <p>Loading</p>
    );
    return (
      <div id="todo-list" className="todo-list-container">
        <button className="button" onClick={this.handleOpener}>
          VIEW
        </button>
        <div
          style={this.state.open ? trueOpen : falseOpen}
          className="todo-items-container"
        >
          <ul>
            <li className="todo-li-1">Record</li>
            <li className="todo-li">Map</li>
            <li className="todo-li-3">Zone</li>
            <li className="todo-li-4">Server</li>
            {todoMarkup}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ data: state.data });

export default connect(mapStateToProps, { getTodos })(ProfileTodoList);