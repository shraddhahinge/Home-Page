import React from "react";
import image from "./image.jpg";
import { Select, TextField, FormControl, MenuItem } from "@material-ui/core";
import "./InputSearch.css";

function InputSearch() {
  return (
    <div>
      <img src={image} className="background" />
      <div className="contents-wrapper">
        <h2 className="title">Hunger Bounce</h2>
        <h3 className="tagline">Let Deliciousness twril in your mouth🌮</h3>
        <div className="search-container">
          <TextField
            className="input"
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <FormControl className="dropdown">
            <Select
              variant="outlined"
              //   onChange={onCountryChange}
              //   value={country}
              value="city"
            >
              <MenuItem value="city">City</MenuItem>
              {/* {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default InputSearch;
