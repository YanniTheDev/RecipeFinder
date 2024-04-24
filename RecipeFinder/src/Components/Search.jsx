import "../CSS Styles/Search.css";
import "../CSS Styles/Reusables.css";

import { useState } from "react";

import Axios from "axios";

// IMAGES
import loadingWheel from "../Images/LoadingWheel.png";

export const Searchbar = () => {
    const [recipeNameQuery, setRecipeNameQuery] = useState("");
    const [fetchingRecipes, setFetchingRecipes] = useState(false);

    const setRecipeQuery = (event) => {
        setRecipeNameQuery(event.target.value);
    }

    const getRecipes = () => {
        setFetchingRecipes(true);
        console.log(1);

        Axios.get(`https://api.edamam.com/search?q=${recipeNameQuery}&app_id=0e3ef802&app_key=a1b68ccf537c38d19a2af561d81b1bd9`).then((response) => {
            console.log(response.data);

            console.log(2);
            setFetchingRecipes(false);
        });
    }
    
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) { //Enter key
            getRecipes();
        }
    }

    return (
        <div className="search-container flex-c-c flex-dir-column">
            <input type="text" 
                   placeholder="Search for a recipe" 
                   onChange={setRecipeQuery}
                   onKeyUp={handleKeyDown} 
                   className="search-box comfortaa-medium"
            />

            
            {fetchingRecipes && (
                <div className="loader">
                </div>
            )}
        </div>
    );
}