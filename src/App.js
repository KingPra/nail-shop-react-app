import React, { Component } from "react";
import { Header, Table, Input } from "semantic-ui-react";
import AddJob from "./components/AddJob";
import AddPerson from "./components/AddPerson";
import Tip from "./components/Tip";
import axios from "axios";
import "./App.css";
const API = "http://localhost:3000";

class App extends Component {
  state = {
    data: [],
    jobType: [],
    tip: []
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

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick(e) {
    console.log(`handle click ${e.target.value}`);

    if (e.target.value === "delete") {
      console.log(e.target.value);
    }
  }

  render() {
    let counter = 0;
    let keyCounter = 0;
    let { data, jobType } = this.state;
    return (
      <div>
        <AddPerson api={API} />
        <div className="container">
          {data.map(person => {
            counter++;
            return (
              <div
                className="column"
                style={{ gridColumnStart: counter }}
                key={person._id}
              >
                <div>{person.name}</div>

                {person.jobList.map(list => {
                  keyCounter++;
                  return (
                    <div className="item" key={keyCounter + person._id}>
                      {list}
                      <Tip />
                    </div>
                  );
                })}
                <div className="item">
                  <AddJob />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
