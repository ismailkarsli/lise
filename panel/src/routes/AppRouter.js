import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "../apollo";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

import User from "../components/user";
import Settings from "../components/settings";
import News from "../components/news";
import Announcements from "../components/announcements";
import Events from "../components/events";
import Links from "../components/links";

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
          <PrivateRoute path="/haberler" component={News} />
          <PrivateRoute path="/duyurular" component={Announcements} />
          <PrivateRoute path="/etkinlikler" component={Events} />
          <PrivateRoute path="/baglantilar" component={Links} />
          <PrivateRoute path="/ayarlar" component={Settings} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
};

export default AppRouter;
