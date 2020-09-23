import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "history/browser";
import Header from "./components/ui/Header";
import Home from "./components/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
