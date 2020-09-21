import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import history from "history/browser";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/**
        <Route path="/iletisim" component={Contact} />
         */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
