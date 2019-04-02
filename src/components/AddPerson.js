import React from "react";
import axios from "axios";

export default function AddPerson(props) {
  const hide = {
    display: "none"
  };
  console.log(props.api);

  function handleOnClick(e) {
    const form = document.getElementById("form");
    const btn = document.getElementById("button");
    if (form.style.display === "none") {
      form.style.display = "";
      btn.style.display = "none";
    } else {
      form.style.display = "none";
      btn.style.display = "";
    }
  }

  function handleSubmit(e) {
    const name = document.querySelector(".name").value;
    axios
      .post(`${props.api}/employee`, { name: name })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <form id="form" style={hide} onSubmit={handleSubmit}>
        <input className="name" type="text" placeholder="name" />
        <input type="submit" value="submit" />
      </form>
      <button id="button" onClick={handleOnClick}>
        add employee
      </button>
    </div>
  );
}
