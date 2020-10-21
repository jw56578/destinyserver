import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
import Login from "./Containers/Login";
import Listings from "./Containers/Listings";
import Details from "./Containers/Details";
import AddListing from "./Containers/AddListing";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Listings} />
      <Route exact path="/add" component={AddListing} />
      <Route exact path="/bizz/:id" component={Details} />
    </Switch>
  );
};

export default Router;
