import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import All from "./All";
import Single from "./Single";
import NotFound from "../ui/NotFound";

const News = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={All} />
      <Route exact path={`${match.path}/:slug`} component={Single} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default News;
