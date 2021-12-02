import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
const BugForm = () => {
  const location = useLocation();
  // what is going on here?
  const { bug } = location.state ? location.state : {};

  const [name, setName] = useState(bug ? bug.name : "");
  const [description, setDescription] = useState(bug ? bug.description : "");

  const params = useParams();
  console.log("p: ", params);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let bugData = { name, description };
    if (params.id) {
      try {
        await axios.put(`/api/bugs/${params.id}`, bugData);
        navigate("/bugs");
      } catch (err) {
        // Handle
        alert("Error occured in Update");
      }
    } else {
      try {
        await axios.post(`/api/bugs`, bugData);
        navigate("/bugs");
      } catch (err) {
        // Handle error
        alert("Error occured in Create");
      }
    }
  };
  return (
    <div>
      <h1>{params.id ? "Update" : "New"} Bug Form</h1>
      <p>id: {params.id}</p>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>description</p>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>{params.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default BugForm;
