import React from "react";
import hb from "./hb.jpg";
import { Button } from "@material-ui/core";
import "./Header.css";

import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";

function Header() {
  const Button = styled(MuiButton)(spacing);
  return (
    <div className="header">
      <img src={hb} alt="logo" className="logo" />
      <div className="buttons">
        <Button
          variant="contained"
          color="secondary"
          className="first"
          m="1rem"
        >
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
