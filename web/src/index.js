import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "history/browser";
import apollo from "./common/apollo";
import { ApolloProvider, useQuery } from "@apollo/client";
import { SITE_SETTINGS } from "./gql/siteSettings/query";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";
import Events from "./components/Events";
import Announcements from "./components/Announcements";
import "./styles/main.scss";

const settingsContext = React.createContext({});
export { settingsContext };

const App = () => {
  const { data, loading, error } = useQuery(SITE_SETTINGS);

  if (loading) {
    return <div>Yükleniyor</div>;
  } else if (error) {
    return <div>Hata</div>;
  }

  return (
    <settingsContext.Provider value={data.siteSettings}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hakkimizda" component={About} />
          <Route exact path="/haberler" component={News} />
          <Route exact path="/duyurular" component={Announcements} />
          <Route exact path="/etkinlikler" component={Events} />
          <Route exact path="/iletisim" component={Contact} />
          <Route path="/">
            <div>Sayfa bulunamadı (düzenlenecek)</div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </settingsContext.Provider>
  );
};

ReactDOM.render(
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
