import React, { Component } from "react";

export class AddTodoList extends Component<any, any> {
  render() {
    return (
      <div className="todo-container">
        <h2>To Do List</h2>
        <form id="todo-form">
          <select name="record" id="record">
            <option value="WR">WR</option>
            <option value="top10">top10</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
            <option value="G4">G4</option>
            <option value="G5">G5</option>
            <option value="G6">G6</option>
            <option value="PR">PR</option>
            <option value="one-shot">One-Shot</option>
            <option value="completion">Completion</option>
          </select>
          <input type="text" name="course" placeholder="Map" />
          <select name="zone" id="zone">
            <option value="map">Map</option>
            <option value="stage">Stage</option>
            <option value="Bonus">Bonus</option>
          </select>
          <select name="host" id="host">
            <option value="CSS-KSF">CSS KSF</option>
            <option value="Heaven">Heaven</option>
            <option value="KSFGO">KSFGO</option>
          </select>
          <button className="button" type="submit">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodoList;
