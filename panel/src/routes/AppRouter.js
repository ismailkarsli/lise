import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "../apollo";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

import User from "../components/user/User";
import Settings from "../components/settings/Settings";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const AppRouter = () => {
  return (
    <Router history={history}>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/anasayfa" component={Dashboard} />
          <PrivateRoute path="/kullanicilar" component={User} />
          <PrivateRoute path="/haberler" component={User} />
          <PrivateRoute path="/duyurular" component={User} />
          <PrivateRoute path="/etkinlikler" component={User} />
          <PrivateRoute path="/ayarlar" component={Settings} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
};

export default AppRouter;
