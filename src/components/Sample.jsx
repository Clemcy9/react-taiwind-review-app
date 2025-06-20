import React, { useState } from "react";

function Sample() {
  const [name, setName] = useState("");
  const [paswd, setPaswd] = useState("");

  function handleChangeUname(event) {
    console.log(`${event.target} was changed and value= ${event.target.value}`);
    setName(event.target.value);
  }

  function handleChangePaswd(event) {
    console.log(`${event.target} was changed and value= ${event.target.value}`);
    setPaswd(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted, values are:", name, paswd);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="uname"
        value={name}
        placeholder="Enter Username"
        onChange={handleChangeUname}
      />
      <br />
      <input
        type="password"
        name="paswd"
        value={paswd}
        placeholder="Enter password"
        onChange={handleChangePaswd}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Sample;
