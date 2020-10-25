import { decodeBase64 } from "bcryptjs";
import React, { useEffect, useState } from "react";
import store from "../../store";

function Garden() {
  const [garden, setGarden] = useState([]);
  const user = store.getState().auth.user.id;
  useEffect(() => {
    fetch("api/users/" + user, { method: "GET" }).then((user) => {
      user.json().then((user) => {
        console.log(user.garden);
        setGarden(user.garden);
      });
    });
  });
  return (
    <div>
    <h3>My Garden</h3>
      {garden.map((plant) => (
        <p>{plant.name}</p>
      ))}
    </div>
  );
}

export default Garden;
