import React from "react";
import { Switch,Route } from "react-router-dom";
import { Header,TopNav } from "./components";
import { Home } from "./pages/home";
import { Lofi } from "./pages/lofi";

export const App = () => {
  return (
    <>
      <Header />
      <TopNav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lofi" component={Lofi} />
        </Switch>
      </div>
    </>
  );
}