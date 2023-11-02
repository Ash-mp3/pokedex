import PokemonCard from './PokemonCard';
import "./App.src.css";
// link to main css file

function App() {
  return (
    <div className="App">
      <header className="header w-full flex justify-between">
        <div className="logo h-full  w-1/6"></div>
        <div className="search flex items-center justify-center w-12">
          <i className="fa-solid fa-magnifying-glass text-3xl"></i>
        </div>
      </header>
      <div className="bodyDiv">
        <div className="listBody">
          <div className="screenDiv">
            <PokemonCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
