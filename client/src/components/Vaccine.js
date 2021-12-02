import React from "react";
const Vaccine = (props) => {
  const { name, efficacy, id, bug_id } = props;
  return (
    <div style={{ border: "4px solid green", margin: "10px" }}>
      <h3>Name: {name}</h3>
      <p>efficacy: {efficacy}</p>
      <p>id: {id}</p>
      <p>bug_id: {bug_id}</p>
    </div>
  );
};

export default Vaccine;
