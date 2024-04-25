import "../CSS Styles/Reusables.css";
import "../CSS Styles/Recipe.css";

export const Recipe = (props) => {
    return (
        <div className="individual-recipe-container">
            <h1>{props.recipeList.recipe.label}</h1>
            <p>Calories: {props.recipeList.recipe.calories}</p>
        </div>
    )
}