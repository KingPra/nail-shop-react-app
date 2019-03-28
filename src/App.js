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
    let { data, jobType } = this.state;
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
            {data.map(person =>
              person.jobList.length === 0 ? (
                <Table.Cell>add job</Table.Cell>
              ) : (
                person.jobList.map(job => (
                  <Table.Row>
                    <Table.Cell>{job}</Table.Cell>
                  </Table.Row>
                ))
              )
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default App;
// <tr>
// {data.map(person => (
//   <td key={person._id}>
//     {person.name}
//     <tr>
//       {person.jobList.length === 0 ? (
//         <td>Add Job</td>
//       ) : (
//         <tbody>
//           <tr>
//             <td>{person.jobList}</td>
//           </tr>
//           <tr>
//             <td>Add Job</td>
//           </tr>
//         </tbody>
//       )}
//     </tr>
//   </td>
// ))}
// </tr>
