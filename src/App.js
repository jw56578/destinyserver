import React from "react";
import Router from "./Router";
import Navigation from "./Containers/Navigation";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
