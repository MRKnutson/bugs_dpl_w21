import { useState } from "react";
const BoxShadow = (props) => {
  const [showbody, setShowBody] = useState(true);
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      }}
    >
      <h1 style={{ fontSize: "30px" }}>{props.header}</h1>
      <button onClick={() => setShowBody(!showbody)}>
        {showbody ? "hide" : "show"}
      </button>
      {showbody && props.children}
    </div>
  );
};

export default BoxShadow;
