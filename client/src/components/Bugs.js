import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Bugs = () => {
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    getBugs();
  }, []);
  const getBugs = async () => {
    try {
      let res = await axios.get("/api/bugs");
      setBugs(res.data);
    } catch (err) {
      alert("TODO: ERROR IN UI error occured");
    }
  };
  const deleteBug = async (id) => {
    try {
      // remove from db
      await axios.delete(`/api/bugs/${id}`);
      // remove from UI
      setBugs(bugs.filter((b) => b.id !== id));
    } catch (err) {
      alert("Error occured deleting bug");
    }
  };
  const renderBugs = () => {
    return bugs.map((bug) => {
      return (
        <div style={{ border: "4px solid green" }}>
          <h1>{bug.name}</h1>
          <h1>{bug.description}</h1>
          <button onClick={() => deleteBug(bug.id)}>delete</button>
          <Link to={`/bugs/${bug.id}/edit`} state={{ bug, x: 1 }}>
            Edit
          </Link>
          <Link to={`/bugs/${bug.id}/vaccines`} state={{ bug }}>
            Show
          </Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Bugs</h1>
      <Link to="/bugs/new">New Bug</Link>
      {renderBugs()}
    </div>
  );
};

export default Bugs;
