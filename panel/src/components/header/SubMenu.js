import React from "react";
import { useRouteMatch } from "react-router-dom";
import SubMenuItem from "./SubMenuItem";

const SubMenu = (props) => {
  const match = useRouteMatch();
  return (
    <div className="bg-white py-3 mb-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {props.data.map((item, i) => (
            <SubMenuItem
              key={i}
              url={`${match.path}${item.url}`}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default SubMenu;
