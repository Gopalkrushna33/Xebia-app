import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../helpers";
import { alertActions } from "../actions";
import { PrivateRoute } from "../components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";

import "./App.css"

function App() {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  });

  return (
    <div className="container center">
      <div className="col-md-8">
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} user={user} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export { App };
