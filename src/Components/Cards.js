import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Cards() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  console.log(categories[0]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user-key", "0bdb56635f92b3041fec1b29008f466a");
    let options = {
      method: "GET",
      headers: headers,
    };
    let url = `https://developers.zomato.com/api/v2.1/categories`;
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.categories);
        setCategories(data.categories);
      });
  };

  // https://source.unsplash.com/1600x900/?nature,water
  // https://developers.zomato.com/api/v2.1/categories
  return (
    <div className="cards">
      {/* <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {categories.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </div>
  );
}

export default Cards;
