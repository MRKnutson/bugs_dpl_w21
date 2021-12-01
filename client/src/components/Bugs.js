import React, { useEffect } from "react";
import axios from "axios";
const Bugs = () => {
  useEffect(() => {
    getBugs();
  }, []);
  const getBugs = async () => {
    let res = await axios.get("/api/bugs");
    console.log(res);
  };
  return (
    <div>
      <h1>Bugs</h1>
    </div>
  );
};

export default Bugs;
