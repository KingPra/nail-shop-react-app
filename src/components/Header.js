import React from "react";

export default function Header(props) {
  const styles = {
    listStyle: "none",
    background: "red",
    color: "blue"
  };

  return (
    <ul className={styles}>
      This is a Header function {props.name} {props.list}
    </ul>
  );
}
