import "./CSS Styles/App.css";
import "./CSS Styles/Reusables.css";
import "./CSS Styles/Reset.css";

import { Searchbar } from './Components/Search.jsx';

function App() {
  return (
    <div className="content flex-c-c">
      <Searchbar />
    </div>
  );
}

export default App
