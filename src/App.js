import PokeList from "./components/PokeList";
import Header from "./components/header";
import { useState, useEffect } from "react";
import "./App.src.css";

function App() {
  const [pokes, setpokes] = useState([]);

  useEffect(() => {
    const FetchAllPokemon = async () => {
      const pokesApi = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      ).then((res) => res.json());
      FetchPokemon(pokesApi.results);
    };
    const FetchPokemon = async (pokesApi) => {
      let urls = [];
      pokesApi.map((elem) => {
        return urls.push(elem.url);
      });
      const pokemonData = await Promise.all(
        urls.map((elem) => {
          return fetch(elem).then((res) => res.json());
        })
      );
      setpokes(pokemonData);
      console.log(pokemonData);
    };
    FetchAllPokemon();
  }, []);

  return (
    <div className="App h-full">
      <Header />
      <div className="bodyDiv h-full flex justify-center items-center">
        <PokeList pokes={pokes} />
      </div>
    </div>
  );
}

export default App;
