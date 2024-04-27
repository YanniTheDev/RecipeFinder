import "./CSS Styles/App.css";
import "./CSS Styles/Reusables.css";
import "./CSS Styles/Reset.css";

import { Searchbar } from './Components/Search.jsx';

function App() {
  return (
    <>
      <header>
        <h1 className="web-title staatliches text-align-c">Search for a recipe?</h1>
      </header>

      <div className="content flex-c-c">
        <Searchbar />
      </div>
    </>
  );
}

export default App
