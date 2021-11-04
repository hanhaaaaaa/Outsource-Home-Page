import React from "react"
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { appRoutes } from "./router";
import "./assets/styles/index.scss";

const App = () => {
  return (
    <Switch>
      {appRoutes.map((r, index) => {
        return (
          <Route
            path={r.path}
            key={index}
            exact={r.exact}
            render={() => {
              return <r.component />
            }}
          />
        );
      })}
      <Redirect to="/404" />
    </Switch>
  );
}

export default withRouter(App);
