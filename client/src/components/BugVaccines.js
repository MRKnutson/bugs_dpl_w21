import React from "react";
import { useLocation } from "react-router";
const BugVaccines = (props) => {
  const location = useLocation();
  const { bug } = location.state;
  return (
    <div>
      <p>BugVaccines page</p>
      <p>Bug</p>
      {JSON.stringify(bug)}
    </div>
  );
};

export default BugVaccines;
