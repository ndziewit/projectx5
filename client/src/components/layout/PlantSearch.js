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
import store from "../../store";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 500,
  },
});


export const PlantItem = ({
  image_url,
  scientific_name,
  common_name,
  id,
  user
  
}) => {
  const classes = useStyles();
  return (
      <Card >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image_url}
            title="Image of your plant"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {common_name}
            </Typography>
            <Typography gutterBottom variant="h4" component="h2">
              {scientific_name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary" onClick={handleSubmit}>
            Add to Garden
          </Button>
        </CardActions>
      </Card>
    );
    function handleSubmit(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      let newPlant = {
        "name": common_name,
        "scientific_name": scientific_name,
        "user": user.id
      };
      console.log(newPlant);

      return fetch('/api/garden', {
        method: 'POST',
        body: JSON.stringify(newPlant),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(data => console.log(data)); 
}
    }
          

export const PlantSearch = (props) => {
  const [query, setQuery] = useState("Plant Name");
  const [response, setResponse] = useState({});
  const [user, setUser] = useState({});
  const onQueryChange = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    console.log(store.getState().auth.user)
    setUser(store.getState().auth.user)
    async function fetchData() {
      if (query && query.length > 0) {
        const res = await axios.get(
          `/api/trefle/species/${query}`
          );
        console.log(res);
        setResponse(res);
      }
    }
    fetchData();
    console.log(user);
  }, [query]);

  return (
    <><div>
            <div>
        {response.data &&
          response.data.map((e) => <PlantItem {...e} user={user}key={e.id} />)}
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