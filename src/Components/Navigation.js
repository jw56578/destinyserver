import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Navigation = (props) => {
  const cookies = cookie.parse(document.cookie);
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="secondary">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Coffee Buzz
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Listings</Link>
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Link to="/Add">Add</Link>{" "}
                  <Button
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/login");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Button
                  onClick={() => {
                    document.cookie = "loggedIn=";
                    window.location.replace("/login");
                  }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn && (
          <span>
            Welcome <span style={{ color: "hotpink" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
};

export default Navigation;
