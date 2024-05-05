import "../CSS Styles/Reusables.css";
import "../CSS Styles/Recipe.css";
import "../CSS Styles/Reset.css";

export const Recipe = (props) => {
    return (
        <>
            <div className="individual-recipe-container flex-s-c">
                <img src={props.recipeList.recipe.image} alt="" className="recipe-image"/>

                <div className="recipe-information">
                    <div className="recipe-name-container">
                        <h1 className="recipe-name nunito-bold">{props.recipeList.recipe.label}</h1>
                    </div>

                    <p className="recipe-calories comfortaa-medium">Calories: {Math.round(props.recipeList.recipe.calories)}</p>

                    {/* <div className="recipe-ingredients">
                        <h3 className="nunito-bold">Ingredients</h3>

                        <ul className="ingredient-list">
                            {props.recipeList.recipe.ingredients.map((ingredient) => {
                                return (
                                    <li className="comfortaa-medium recipe-individual-ingredient">{ingredient.text}</li>
                                );
                            })}
                        </ul>
                    </div> */}
                </div>
            </div>

            <div className="extra-recipe-info flex-e-c">
                <button className="ingredients-button">Ingredients</button>
            </div>
        </>
    )
}