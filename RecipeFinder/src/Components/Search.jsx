import "../CSS Styles/Search.css";
import "../CSS Styles/Reusables.css";

export const Searchbar = () => {
    return (
        <div className="search-container flex-c-c">
            <input type="text" placeholder="Search for a recipe" className="search-box"/>
        </div>
    );
}