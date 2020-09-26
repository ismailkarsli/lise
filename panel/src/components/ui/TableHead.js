import React from "react";

export default (props) => {
  return (
    <th
      className={`${
        props.custom
      } text-sm px-4 py-2 font-semibold border  border-green-200 bg-green-100 ${
        props.onClick ? "cursor-pointer hover:bg-white" : ""
      }`}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </th>
  );
};
