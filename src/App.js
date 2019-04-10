import React, { Component } from "react";
import Header from "./components/Header";
import Cell from "./components/Cell";
import AddJob from "./components/AddJob";
import AddPerson from "./components/AddPerson";
import axios from "axios";
import "./App.css";
const API = "http://localhost:3000";

class App extends Component {
  state = {
    data: [],
    jobType: [],
    value: ""
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
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    let counter = 0;
    let keyCounter = 0;
    let { data } = this.state;
    return (
      <div className="container">
        <Header data={data} />
        <Cell data={data} />
      </div>
    );
  }
}

export default App;
