import { useState } from 'react'
import "./CSS Styles/App.css"

import Axios from "axios";

import { Searchbar } from './Components/Search.jsx';

function App() {

  Axios.get("https://api.edamam.com/search?q=chicken&app_id=0e3ef802&app_key=a1b68ccf537c38d19a2af561d81b1bd9").then((response) => {
    console.log(response.data.hits[0].recipe.calories);
  });

  return (
    <div>
      <Searchbar />
    </div>
  );
}

export default App
