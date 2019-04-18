import React, { Component } from "react";
import Cell from "./components/Cell";
import AddPerson from "./components/AddPerson";
import axios from "axios";
import "./App.css";
const API = "http://localhost:3000";

class App extends Component {
  state = {
    data: [],
    jobType: ["medi", "pedi", "massage"],
    tip: [],
    delete: false
  };

  // load data from database
  componentDidMount() {
    axios
      .get(`${API}/employee`)
      .then(response => this.setState({ data: response.data }));
  }

  // updates employee name on db on header form submit
  handleSubmit = e => {
    axios
      .post(`${API}/employee`, {
        name: this.state.value
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleDelete = id => {
    this.setState({
      data: this.state.data.filter(person => person._id !== id)
    });
  };

  addJob = id => {
    this.setState({
      data: this.state.data
    });
  };

  handlePost = name => {
    console.log("handle post for", name);
    axios
      .post(`${API}/employee`, {
        name
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <AddPerson api={API} name={this.handlePost} />
        <Cell
          data={this.state.data}
          api={API}
          handleDelete={this.handleDelete}
          addJob={this.addJob}
        />
      </div>
    );
  }
}

export default App;
