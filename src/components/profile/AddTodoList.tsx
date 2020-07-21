import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo, clearErrors } from "../../redux/actions/dataActions";

interface State {
  record: any;

  course: any;
  zone: any;
  server: any;
  errors: any;
}
export class AddTodoList extends Component<any, any> {
  state: State = {
    record: "wr",
    course: "",
    zone: "map",
    server: "css ksf",
    errors: {},
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo({
      record: this.state.record,
      course: this.state.course,
      zone: this.state.zone,
      server: this.state.server,
    });
    console.log(this.state);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="todo-container">
        <h2>To Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <select
            value={this.state.record}
            name="record"
            onChange={this.handleChange}
          >
            <option value="wr">WR</option>
            <option value="top10">top10</option>
            <option value="g1">G1</option>
            <option value="g2">G2</option>
            <option value="g3">G3</option>
            <option value="g4">G4</option>
            <option value="g5">G5</option>
            <option value="g6">G6</option>
            <option value="pr">PR</option>
            <option value="one-shot">One-Shot</option>
            <option value="completion">Completion</option>
          </select>
          <input
            className="input"
            type="text"
            name="course"
            id="course"
            value={this.state.course}
            onChange={this.handleChange}
            placeholder="Map"
          />
          <select
            value={this.state.zone}
            name="zone"
            onChange={this.handleChange}
          >
            <option value="map">Map</option>
            <option value="stage">Stage</option>
            <option value="bonus">Bonus</option>
          </select>
          <select
            value={this.state.server}
            name="server"
            onChange={this.handleChange}
          >
            <option value="css-ksf">CSS KSF</option>
            <option value="heaven">Heaven</option>
            <option value="ksfgo">KSFGO</option>
          </select>
          {errors.body && <p>{errors.body}</p>}
          <button className="button" type="submit">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { addTodo, clearErrors })(AddTodoList);
