import React from "react";

export default function Tip(props) {
  console.log(`tip is ${props}`);
  return (
    <form>
      <input type="text" />
      <input type="submit" value="Enter" />
    </form>
  );
}
