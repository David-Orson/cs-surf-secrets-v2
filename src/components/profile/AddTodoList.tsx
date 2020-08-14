import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addTodo,
  getTodos,
  clearErrors,
} from "../../redux/actions/dataActions";

interface State {
  record: any;

  course: any;
  zone: any;
  server: any;
  errors: any;
  open: boolean;
}
export class AddTodoList extends Component<any, any> {
  state: State = {
    record: "wr",
    course: "",
    zone: "map",
    server: "css ksf",
    errors: {},
    open: false,
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(
      {
        record: this.state.record,
        course: this.state.course,
        zone: this.state.zone,
        server: this.state.server,
      },
      this.props.handle
    );
    this.setState({
      record: "wr",
      course: "",
      zone: "map",
      server: "css ksf",
    });
    console.log(this.state);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="todo-container">
        <h2>To Do List</h2>
        {this.state.open ? (
          <form className="todo-form" onSubmit={this.handleSubmit}>
            <select
              className="todo-select"
              value={this.state.record}
              name="record"
              onChange={this.handleChange}
            >
              <option value="WR">WR</option>
              <option value="top10">top10</option>
              <option value="G1">G1</option>
              <option value="G2">G2</option>
              <option value="G3">G3</option>
              <option value="G4">G4</option>
              <option value="G5">G5</option>
              <option value="G6">G6</option>
              <option value="PR">PR</option>
              <option value="One-Shot">One-Shot</option>
              <option value="Completion">Completion</option>
            </select>
            <input
              type="text"
              name="course"
              id="course"
              value={this.state.course}
              onChange={this.handleChange}
              placeholder="Map"
              className="todo-input"
            />
            <select
              value={this.state.zone}
              name="zone"
              onChange={this.handleChange}
              className="todo-select"
            >
              <option value="Map">Map</option>
              <option value="Stage">Stage</option>
              <option value="Bonus">Bonus</option>
            </select>
            <select
              value={this.state.server}
              name="server"
              onChange={this.handleChange}
              className="todo-select"
            >
              <option value="KSF-CSS">KSF CSS</option>
              <option value="Heaven">Heaven</option>
              <option value="KSFGO">KSFGO</option>
            </select>
            {errors.body && <p>{errors.body}</p>}
            <button className="button-small" type="submit">
              ADD
            </button>
            <button className="button-small-red" onClick={this.handleClose}>
              X
            </button>
          </form>
        ) : (
          <button className="button-small" onClick={this.handleOpen}>
            ADD
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
  UI: state.UI,
});

export default connect(mapStateToProps, { addTodo, getTodos, clearErrors })(
  AddTodoList
);
