import React, { useEffect, useState } from "react";
import store from "../../store";
import GardenItem from "./GardenItem";

function Garden() {
  const [garden, setGarden] = useState([]);
  const user = store.getState().auth.user.id;
  useEffect(() => {
    fetch("api/users/" + user, { method: "GET" })
    .then((user) => {
      user.json()
      .then((user) => {
        setGarden(user.garden);
        // console.log(garden);
      });
    });
  });
  // console.log(garden);
  return (
    <div>
    <h3>My Garden</h3>
      {garden.map((plant) => (
        <GardenItem {...plant} key={plant.id} />      ))}
    </div>
  );
}

export default Garden;
