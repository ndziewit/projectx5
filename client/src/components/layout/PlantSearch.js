import React, { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TREFLE_TOKEN from "./.env";

export const PlantItem = ({
  image_url,
  scientific_name,
  common_name,
  synonyms,
  id
}) => {

  return (<div className="PlantItem">
    <div id="plant-image">
      <img src={ image_url } alt="Plant Image">
      </img>
    </div>
    <div id="plant-info">
      <h2>
        { common_name }
        </h2>
      <p>{ scientific_name }</p>
        { synonyms.length > 0 && <p>AKA: { synonyms.slice(0, 2).join(' or ') }</p>}
      <p>{ id }</p>
      
    </div>
  </div>)
}

export const PlantSearch = (props) => {

  const [query, setQuery] = useState('Plant Name')
  const [response, setResponse] = useState({})

  const onQueryChange = (query) => {
    setQuery(query)
  }

  useEffect(() => {
    async function fetchData() {
      if (query && query.length > 0) {
        const res = await axios.get(`/api/trefle/species/${query}`)
        setResponse(res.data)
      }
    }
    fetchData()
  }, [query])

  return (<>
          <span>
            Plant:
            <DebounceInput
              minLength={3}
              type="text"
              onChange={e => onQueryChange(e.target.value)}
              value={ query }
              debounceTimeout={300}
            />
          </span>
      <div className="column">
        {response.data && response.data.map(e => <PlantItem {...e} key={e.id} />)}
      </div>
    {/* </div> */}

  </>)
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll("#plant-search").length > 0) {
    const domContainer = document.querySelector('#plant-search');
    ReactDOM.render(React.createElement(PlantSearch), domContainer);
  }
})