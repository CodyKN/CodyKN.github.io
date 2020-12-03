import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Lofi } from "./pages/lofi";

export const App = () => {
  return (
    <>
      <div>
        Cody's page
      </div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/lofi">Lofi</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lofi" component={Lofi} />
      </Switch>
    </>
  );
}