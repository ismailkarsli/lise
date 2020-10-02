import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apollo from "./common/apollo";
import { ApolloProvider, useQuery } from "@apollo/client";
import { SITE_SETTINGS } from "./gql/siteSettings/query";
import Loading from "./components/ui/Loading";
import Error from "./components/ui/Error";
import NotFound from "./components/ui/NotFound";
import ScrollToTop from "./components/ui/ScrollToTop";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Info from "./components/Info/";
import "./styles/main.scss";

const settingsContext = React.createContext({});
export { settingsContext };

const App = () => {
  const { data, loading, error } = useQuery(SITE_SETTINGS);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error message="Sayfa yüklenemedi." />;
  }

  return (
    <settingsContext.Provider value={data.siteSettings}>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hakkimizda" component={About} />
          <Route path="/bilgi" component={Info} />
          <Route exact path="/iletisim" component={Contact} />
          <Route path="/" component={NotFound} />
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
