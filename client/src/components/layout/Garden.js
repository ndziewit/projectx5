import React, { useEffect, useState } from "react";
import store from "../../store";
import GardenItem from "./GardenItem";

function Garden() {
  const [garden, setGarden] = useState([]);
  const user = store.getState().auth.user.id;
  useEffect(() => {
    if (garden.length <= 0) {
      fetch("api/users/" + user, { method: "GET" })
      .then((user) => {
        user.json()
        .then((user) => {
          console.log(user.garden);
          setGarden(user.garden);
          // console.log(garden);
        });
      });
    }
  },[garden]);
    
  // console.log(garden);
  return (
    <div className="col s12 center-align"
    style= {{
      marginLeft: "18%",
      marginRight: "18%"
    }}>
    <h3>My Garden</h3>
      {garden.map((plant) => (
        <GardenItem {...plant} key={plant.id} />      ))}
    </div>
  );
}

export default Garden;
