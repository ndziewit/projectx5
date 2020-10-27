import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });

const PlantItem = ({
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
        console.log('The link was clicked.')

        //Nested API call for more information GOES HERE inside of .then() function
        .then();
        let newPlant = {
          "name": common_name,
          "scientific_name": scientific_name,
          "user": user.id
        }
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

export default PlantItem;