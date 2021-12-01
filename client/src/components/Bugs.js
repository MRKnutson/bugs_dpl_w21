import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const dummyBugs = [
  { id: 1, name: "dummy bug1", description: "desc 1" },
  { id: 2, name: "dummy bug2", description: "desc 2" },
];
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
      // Uncomment when BE working
      // alert("TODO: ERROR IN UI error occured");

      // // get rid of backend is working
      setBugs(dummyBugs);
    }
  };
  const deleteBug = async (id) => {
    try {
      // remove from db
      await axios.delete(`/api/bugs/${id}`);
      // remove from UI
      setBugs(bugs.filter((b) => b.id !== id));
    } catch (err) {
      // UNCOMMENT WHEN BE WORKING
      // alert("Error occured deleting bug");
      setBugs(bugs.filter((b) => b.id !== id));
    }
  };
  const renderBugs = () => {
    return bugs.map((bug) => {
      return (
        <div style={{ border: "4px solid green" }}>
          <h1>{bug.name}</h1>
          <h1>{bug.description}</h1>
          <button onClick={() => deleteBug(bug.id)}>delete</button>
          <Link to={{ pathname: `/bugs/${bug.id}/edit`, bug: bug, y: 1 }}>
            Edit
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
