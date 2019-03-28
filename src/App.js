import React, { Component } from "react";
import { Header, Table, Input } from "semantic-ui-react";
import axios from "axios";
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

  displayName(val) {
    if (val === "undefined") {
    } else {
      console.log(val);
      return val.map(person => (
        <Table.Cell key={person._id}>{person.name}</Table.Cell>
      ));
    }
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
    let { data, jobType } = this.state;
    return (
      <Table celled collapsing>
        <Table.Header />
        <Table.Body>
          <Table.Row>
            {this.displayName(data)}
            <Table.Cell>
              <form onClick={this.handleSubmit}>
                <Input
                  onChange={this.handleChange}
                  placeholder="Name"
                  type="text"
                  name="employee-name"
                  value={this.state.value}
                />
                <input type="submit" value="Add" />
              </form>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default App;
