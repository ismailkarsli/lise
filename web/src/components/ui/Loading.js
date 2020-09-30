import React from "react";
import { PuffLoader } from "react-spinners";

export default () => {
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
      }}
    >
      <PuffLoader size={100} />
    </div>
  );
};
