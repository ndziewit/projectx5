import React, { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import ReactDOM from 'react-dom';
import axios from 'axios';

const PlantItem = ({
  image_url,
  scientific_name,
  common_name,
  synonyms,
}) => {

  return (<div className="PlantItem">
    <div id="plant-image">
      <img src={image_url}>
      </img>
    </div>
    <div id="plant-info">
      <h2>
        {common_name}
        </h2>
      <p>{scientific_name}</p>
      {/* <p> */}
        {synonyms.length > 0 && <p>AKA: {synonyms.slice(0, 2).join(' or ')}</p>}
        {/* </p> */}
      
    </div>
  </div>)
}

const PlantSearch = (props) => {

  const [query, setQuery] = useState('Plant Name')
  const [response, setresponse] = useState({})

  useEffect(() => {
    async function fetchData() {
      if (query && query.length > 0) {
        const res = await axios.get(`/api/v1/species/search?token=${trefle_token}&q=${query}&limit=5`)
        setresponse(res.data)
      }
    }
    fetchData()
  }, [query])

  const onQueryChange = (query) => {
    setqueryuery(query)
  }

  return (<>
    <div className="columns">
      <div className="column is-1">
        <h1 className="title has-text-centered">
          <i className="fad has-text-primary fa-code"></i>
        </h1>
      </div>
      <div className="column is-10">
        <h2 className=" subtitle">
          <span>
            Plant:
            
            <DebounceInput
              minLength={3}
              type="text"
              onChange={e => onQueryChange(e.target.value)}
              value={query}
              debounceTimeout={300}
            />
          </span>
        </h2>
      </div>
    </div>
    <div className="columns">
      <div className="column is-1">
      </div>
      <div className="column is-5 code-wrap-right">
        {response.data && response.data.map(e => <PlantItem {...e} key={e.id} />)}
      </div>
    </div>

  </>)
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll("#plant-search").length > 0) {
    const domContainer = document.querySelector('#plant-search');
    ReactDOM.render(React.createElement(PlantSearch), domContainer);
  }
})