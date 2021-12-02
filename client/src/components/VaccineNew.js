import axios from "axios";
import React, { useState } from "react";

const VaccineNew = (props) => {
  const [name, setName] = useState("");
  const [efficacy, setEfficacy] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const vaccine = { name, efficacy };
    try {
      // save to DB
      let res = await axios.post(`/api/bugs/${props.bugId}/vaccines`, vaccine);
      // update UI
      props.addVaccine(res.data);
      setName("");
      setEfficacy("");
    } catch (err) {
      alert("err occured");
    }
  };
  return (
    <div>
      <h1>New Form</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>efficacy</p>
        <input value={efficacy} onChange={(e) => setEfficacy(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
};
export default VaccineNew;
