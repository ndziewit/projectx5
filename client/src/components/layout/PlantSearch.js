import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "../../store";
import PlantItem from "./PlantItem";

export const PlantSearch = (props) => {
  const [query, setQuery] = useState("");
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

      <span style={{fontFamily: "Courier"}}>

        Search for your Plant Baby :
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