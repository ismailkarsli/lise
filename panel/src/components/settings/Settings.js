import React, { useState, useEffect } from "react";
import { history } from "../../routes/AppRouter";
import SubMenu from "../header/SubMenu";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import { settings } from "../../navigation";
import Edit from "./Edit";

const User = () => {
  const [component, setComponent] = useState(<Loading />);
  const pathName = history.location.pathname.split("/")[2];

  useEffect(() => {
    setComponent(<Edit />);
  }, [pathName]);

  return (
    <>
      <SubMenu data={settings} />
      <Container>{component}</Container>
    </>
  );
};

export default User;
