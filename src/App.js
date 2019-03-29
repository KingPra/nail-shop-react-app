import React, { Component } from "react";
import { Header, Table, Input } from "semantic-ui-react";
import axios from "axios";
const API = "http://localhost:3000";

class App extends Component {
  state = {
    data: [],
    jobType: [],
    value: "",
    jobCounter: 0
  };

  // load data from database
  componentDidMount() {
    axios.get(`${API}/employee`).then(response =>
      this.setState({
        data: response.data
      })
    );
  }

  displayName(val) {
    if (val === "undefined") {
    } else {
      console.log(
        val.map(
          person =>
            `${person.name} has these jobs: ${person.jobList.map(list => list)}`
        )
      );
      return val.map(person => (
        <td key={person._id}>
          <tr>{person.name}</tr>
        </td>
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
    let { data } = this.state;
    let counter = 0;
    data.map(person => {
      let list = person.jobList.length;
      if (list > counter) {
        counter = list;
      }
    });
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {data.map(person => (
              <Table.HeaderCell>{person.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {data.map(person => {
              let arr = [];
              if (person.jobList.length === 0) {
                for (let i = 0; i < counter; i++) {
                  arr.push(
                    <Table.Row>
                      <Table.Cell>test</Table.Cell>
                    </Table.Row>
                  );
                }
                return <Table.Row>{arr}</Table.Row>;
              }
            })}
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default App;
