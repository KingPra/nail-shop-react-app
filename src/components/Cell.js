import React, { Component } from "react";
import DeletePerson from "./DeletePerson";
import Tip from "./Tip";
import AddJob from "./AddJob";

class Cell extends Component {
  render() {
    let counter = 0;
    let keyCounter = 0;
    let { data, api, handleDelete } = this.props;
    return (
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
              <DeletePerson
                id={person._id}
                api={api}
                data={data}
                handleDelete={handleDelete}
              />
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
    );
  }
}

export default Cell;
