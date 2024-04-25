import "../CSS Styles/Search.css";
import "../CSS Styles/Reusables.css";

import { useState } from "react";

import Axios from "axios";
import { Recipe } from "./Recipe.jsx";

export const Searchbar = () => {
    const [recipeNameQuery, setRecipeNameQuery] = useState("");
    const [fetchingRecipes, setFetchingRecipes] = useState(false);
    const [recipes, setRecipes] = useState();

    const setRecipeQuery = (event) => {
        setRecipeNameQuery(event.target.value);
    }

    const getRecipes = () => {
        setFetchingRecipes(true);

        Axios.get(`https://api.edamam.com/search?q=${recipeNameQuery}&app_id=0e3ef802&app_key=a1b68ccf537c38d19a2af561d81b1bd9`).then((response) => {
            console.log(response.data);

            console.log(response.data.hits);

            const recipeList = response.data.hits;
            setRecipes(recipeList);

            setFetchingRecipes(false);
        });
    }
    
    const handleKeyDown = (event) => {
        if ((event.keyCode === 13) && event.target.value != "") { //Enter key
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

            { recipes && (
                    recipes.map((recipe) => {
                        return ( <Recipe recipeList={recipe}/> );
                    })
                )
            }
            
            {fetchingRecipes && (
                <div className="loader">
                </div>
            )}
        </div>
    );
}