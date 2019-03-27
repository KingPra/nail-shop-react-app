import React, { Component } from "react";
import { Header, Table, Input } from "semantic-ui-react";
import axios from "axios";
import { NONAME } from "dns";

class App extends Component {
  state = {
    data: [],
    jobType: []
  };

  // load data from database
  componentDidMount() {
    const API = "http://localhost:3000/employee";
    axios.get(API).then(response => this.setState({ data: response.data }));
  }

  displayName(val) {
    if (val === "undefined") {
    } else {
      return val.map(person => (
        <Table.HeaderCell key={person._id}>{person.name}</Table.HeaderCell>
      ));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`handleSubmit: ${e}`);
  }

  handleChange(e) {
    console.log(`add ${e.target.value} to employee data`);
  }

  render() {
    let { data, jobType } = this.state;
    return (
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            {this.displayName(data)}
            <Table.HeaderCell>
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
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
            <Table.Cell>jobs</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default App;
