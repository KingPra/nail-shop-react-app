import React, { Component } from "react";
import axios from "axios";

export default class DeletePerson extends Component {
  render() {
    const api = this.props.api;
    const id = this.props.id;

    const onClick = () => {
      console.log(`onClick = ${api} ${id}`);
      axios
        .delete(`${api}/employee?id=${id}`)
        .then(this.props.handleDelete(id))
        .catch(error => console.log(error));
    };

    return (
      <div>
        <button onClick={onClick}>Delete</button>
      </div>
    );
  }
}
