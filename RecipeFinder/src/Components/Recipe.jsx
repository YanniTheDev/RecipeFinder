import "../CSS Styles/Reusables.css";
import "../CSS Styles/Recipe.css";
import "../CSS Styles/Reset.css";

export const Recipe = (props) => {
    return (
        <div className="individual-recipe-container">
            <h1 className="recipe-name nunito-bold">{props.recipeList.recipe.label}</h1>

            <img src={props.recipeList.recipe.image} alt="" className="recipe-image"/>

            <p className="recipe-calories comfortaa-medium">Calories: {Math.round(props.recipeList.recipe.calories)}</p>

            <h3 className="nunito-bold">Ingredients</h3>

            <ul>
                {props.recipeList.recipe.ingredients.map((ingredient) => {
                    return (
                        <li className="comfortaa-medium">{ingredient.text}</li>
                    );
                })}
            </ul>
        </div>
    )
}