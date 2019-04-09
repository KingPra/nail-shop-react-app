import React, { Component } from "react";
import axios from "axios";

export default class DeletePerson extends Component {
  render() {
    const api = this.props.api;
    const id = this.props.id;
    const data = this.props.data;

    const onClick = () => {
      console.log(`onClick = ${api} ${id}`);
      axios
        .delete(`${api}/employee?id=${id}`)
        .catch(error => console.log(error));
    };

    const getData = () => {
      axios
        .get(`${api}/employee`)
        .then(response => this.setState({ data: response.data }));
    };

    return (
      <div>
        <button onClick={onClick}>Delete</button>
      </div>
    );
  }
}
