import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./Components/Login";
import Listings from "./Components/Listings";

// Write checkAuth function here
// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
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
      <Route path="/login" component={Login} />
      <Route path="/" component={Listings} />
      {/* <ProtectedRoute exact path="Add" component={Add} /> */}
      <Route path="*" component={() => "WRONGO BONGO! 404 IT AINT HERE"} />
    </Switch>
  );
};

export default Router;
