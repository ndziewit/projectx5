import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import ReactDOM from "react-dom";
import axios from "axios";

export const PlantItem = ({
  image_url,
  scientific_name,
  common_name,
  synonyms,
  id,
}) => {
  return (
      <Card >
        <CardActionArea>
          <CardMedia
            image={ image_url }
            title={ scientific_name }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {common_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {synonyms.length > 0 && <p>AKA: {synonyms.slice(0, 2).join(" or ")}</p>}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
    // <div className="PlantItem">
    //   <div id="plant-image">
    //     <img src={image_url} alt="Plant Image"></img>
    //   </div>
    //   <div id="plant-info">
    //     <h2>{common_name}</h2>
    //     <p>{scientific_name}</p>
    //     {synonyms.length > 0 && <p>AKA: {synonyms.slice(0, 2).join(" or ")}</p>}
    //     <p>{id}</p>
    //   </div>
    // </div>


export const PlantSearch = (props) => {
  const [query, setQuery] = useState("Plant Name");
  const [response, setResponse] = useState({});

  const onQueryChange = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    async function fetchData() {
      if (query && query.length > 0) {
        const res = await axios.get(
          `http://localhost:5000/api/trefle/species/${query}`
        );
        console.log(res);
        setResponse(res);
      }
    }
    fetchData();
  }, [query]);

  return (
    <><div>
            <div>
        {response.data &&
          response.data.map((e) => <PlantItem {...e} key={e.id} />)}
      </div>

      <span>
        Plant:
        <DebounceInput
          minLength={3}
          type="text"
          onChange={(e) => onQueryChange(e.target.value)}
          value={query}
          debounceTimeout={300}
        />
      </span>
      </div></>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelectorAll("#plant-search").length > 0) {
    const domContainer = document.querySelector("#plant-search");
    ReactDOM.render(React.createElement(PlantSearch), domContainer);
  }
});