import React from "react";
import logo from "./logo.jpg";
import { Button } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="buttons">
        <Button variant="contained" color="secondary" className="first">
          Create an account
        </Button>
        <Button variant="contained" color="default" className="second">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header;
