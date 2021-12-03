import axios from "axios";
import React from "react";

const Vaccine = (props) => {
  const { name, efficacy, id, bug_id } = props;
  const deleteBug = async () => {
    await axios.delete(`/api/bugs/${bug_id}/vaccines/${id}`);

    // update The Ui
    // deleteBug(id);
  };
  return (
    <div className="vaccine-container">
      <h3>Name: {name}</h3>
      <p>efficacy: {efficacy}</p>
      <p>id: {id}</p>
      <p>bug_id: {bug_id}</p>
      {/* <p onClick={updateBug}>update</p> */}
      <p onClick={deleteBug}>delete: {`/api/${bug_id}/vaccines/${id}`}</p>
      <p onClick={deleteBug}>delete</p>
    </div>
  );
};

export default Vaccine;
