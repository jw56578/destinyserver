import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
import Login from "./Components/Login";
import Listings from "./Components/Listings";
import Details from "./Components/Details";
// import AddListing from "./Components/AddListing";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Listings} />
      {/* <Route exact path="/add" component={AddListing} /> */}
      <Route exact path="/bizz/:id" component={Details} />
    </Switch>
  );
};

export default Router;
