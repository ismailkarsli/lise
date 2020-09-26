import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Container from "../ui/Container";
import All from "./All";
import Edit from "./Edit";
import Add from "./Add";

const Announcements = () => {
  let match = useRouteMatch();
  return (
    <Container>
      <Route exact path={`${match.path}/`} component={All} />
      <Route path={`${match.path}/ekle`} component={Add} />
      <Route path={`${match.path}/duzenle/:dataId`} component={Edit} />
    </Container>
  );
};

export default Announcements;
