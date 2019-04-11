import React, { Component } from "react";

class AddJob extends Component {
  render() {
    return <button onClick={this.props.addJob}>add job</button>;
  }
}

export default AddJob;
