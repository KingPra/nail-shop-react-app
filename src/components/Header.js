import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return this.props.data.map(person => (
      <div className="column">
        <div className="item" key={person._id} style={headerStyle}>
          {person.name}
        </div>
      </div>
    ));
  }
}
let counter = 0;
const headerStyle = {
  display: "inline-block",
  width: "100px",
  padding: "10px",
  border: "dotted 1px #ccc",
  overflow: "hidden",
  gridColumnStart: `${counter++}`
};

export default Header;
