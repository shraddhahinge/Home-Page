import React from "react";
import image from "./image.jpg";
import { Select, TextField, FormControl, MenuItem } from "@material-ui/core";
import "./InputSearch.css";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  textField: {
    width: "450px",
    background: "grey",
    border: "2px solid white",
    borderRadius: "1rem",
    height: "55px",
  },
  input: {
    color: "white",
  },
  floatingLabelFocusStyle: {
    color: "somecolor",
  },
  formControl: {
    width: "200px",
    background: "grey",
    border: "2px solid white",
    borderRadius: "1rem",
    height: "55px",
  },
}));

function InputSearch() {
  const FormControl = styled(MuiButton)(spacing);
  const classes = styles();

  return (
    <div className="inputSearch">
      {/* <img src={image} className="background" /> */}
      <div className="contents-wrapper">
        <h2 className="title">Hunger Bounce🍴</h2>
        <h3 className="tagline">Let Deliciousness twril in your mouth🌮</h3>
        <div className="search-container">
          <TextField
            floatingLabelFocusStyle={classes.floatingLabelFocusStyle}
            className={classes.textField}
            id="filled-search"
            label="Search for restaurants, dishes...."
            type="search"
            variant="filled"
            InputProps={{
              className: classes.input,
            }}
          />
          <FormControl className="dropdown" ml="1rem">
            <Select
              variant="outlined"
              //   onChange={onCountryChange}
              //   value={country}
              value="city"
              className={classes.formControl}
            >
              <MenuItem value="city">City</MenuItem>
              {/* {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </div>
      </div>
      <img src={image} className="background" />
    </div>
  );
}

export default InputSearch;
