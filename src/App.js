import React from "react";
import { Switch,Route } from "react-router-dom";
import { PageHeader } from "./components/header/PageHeader";
import { TopNav } from "./components/layout/TopNav";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <>
      <PageHeader />
      <TopNav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}
