import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import sendEmail from './email'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


// function waterEmail();

export default function GardenItem({name, scientific_name}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {scientific_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
//On click event to Nodemailer goes here
        // onClick={sendEmail()}

         >
            Set Water Interval
            </Button>
      </CardActions>
    </Card>
  );
}