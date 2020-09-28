import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "history/browser";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Staff from "./components/Staff";
import Announcements from "./components/Announcements";
import "./styles/main.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hakkimizda" component={About} />
        <Route exact path="/haberler" component={News} />
        <Route exact path="/duyurular" component={Announcements} />
        <Route exact path="/etkinlikler" component={Events} />
        <Route exact path="/iletisim" component={Contact} />
        <Route exact path="/personel" component={Staff} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
