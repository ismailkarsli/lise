import React from "react";

export default (props) => {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      {props.message}
    </div>
  );
};
