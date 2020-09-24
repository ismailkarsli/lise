import React, { useState, useEffect } from "react";
import { history } from "../../routes/AppRouter";
import SubMenu from "../header/SubMenu";
import Container from "../ui/Container";
import Loading from "../ui/Loading";
import { users } from "../../navigation";
import All from "./All";
import Edit from "./Edit";
import Add from "./Add";

const User = () => {
  const [component, setComponent] = useState(<Loading />);
  const pathName = history.location.pathname.split("/")[2];

  useEffect(() => {
    switch (pathName) {
      case "ekle":
        setComponent(<Add />);
        break;

      case "duzenle":
        setComponent(<Edit dataId={history.location.pathname.split("/")[3]} />);
        break;

      default:
        setComponent(<All />);
    }
  }, [pathName]);

  return (
    <>
      <SubMenu data={users} />
      <Container>{component}</Container>
    </>
  );
};

export default User;
