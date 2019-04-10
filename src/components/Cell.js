import React, { Component } from "react";

class Cell extends Component {
  render() {
    return this.props.data.map(person => <div>{person.jobList}</div>);
  }
}

export default Cell;
