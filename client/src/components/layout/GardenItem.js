import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PlantSearch } from './PlantSearch';
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

function displayTime() {
  var startTime = 3;
  var myVar = setTimeout( ()=>{
    fetch("/api/email",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"plant": "plant"})
    })
  }, 1000);
  // function myTimer() {
  //   // startTime--;
  //   // if (startTime === 0) {
  //   //   clearInterval(myVar);
  //   //   alert("time’s up");
  //   // }
  }


export default function GardenItem({name, scientific_name}) {
  const classes = useStyles();
  
    const submitRequest = async (e) => {
      e.preventDefault();
      const response = await fetch("/nodemailer3", { 
        method: 'POST', 
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: "testing"
    }); 
      const resData = await response; 
      alert(JSON.stringify(resData));
      if (resData.status === 'success'){
        alert("Message Sent.");
    }else{
        alert("Message failed to send.")
    };
}

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
          onClick={
            displayTime
          }
         >
            Set Water Interval
            </Button>
      </CardActions>
    </Card>
  
  )}