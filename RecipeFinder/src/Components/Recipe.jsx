import "../CSS Styles/Reusables.css";

export const Recipe = (props) => {
    return (
        <div>
            <h1>{props.recipeList.recipe.label}</h1>
            <p>Calories: {props.recipeList.recipe.calories}</p>
        </div>
    )
}