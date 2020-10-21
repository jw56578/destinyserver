import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import cookie from "cookie";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const Navigation = (props) => {
  const cookies = cookie.parse(document.cookie);
  return (
    <div>
      <AppBar position="relative" color="#577271">
        <Toolbar>
          <IconButton color="#642D3D">
            <LocalCafeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Coffee Buzz
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">LISTINGS</Link>
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Link to="/Add">ADD</Link>{" "}
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
            Welcome <span style={{ color: "pink" }}>{props.user}</span>!
          </span>
        )}
      </Typography>
    </div>
  );
};

export default Navigation;
