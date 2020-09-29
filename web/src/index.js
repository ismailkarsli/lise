import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "history/browser";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";

import Events from "./components/Events";
import Announcements from "./components/Announcements";
import "./styles/main.scss";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hakkimizda" component={About} />
        <Route exact path="/haberler" component={News} />
        <Route exact path="/duyurular" component={News} />
        <Route exact path="/etkinlikler" component={News} />
        <Route exact path="/iletisim" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
