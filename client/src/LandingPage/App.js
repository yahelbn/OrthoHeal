import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";

const App = (props) => {
  let { locale } = props;

  return (
    <Switch>
      <Route
        path={"/" + locale + "/"}
        exact
        render={(propRouter) => (
          <Home {...propRouter} {...props} locale={locale} />
        )}
      />
    </Switch>
  );
};

export default App;
