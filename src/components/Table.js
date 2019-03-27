import React from "react";
import { table } from "semantic-ui-react";
export default function Table(props) {
  console.log(props.name);
  return (
    <div>
      <table className="ui collapsing table">
        <thead>
          <tr>
            <th>{props}</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Approved</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td>Approved</td>
            <td>Requires call</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Denied</td>
            <td>None</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>3 People</th>
            <th>2 Approved</th>
            <th />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
