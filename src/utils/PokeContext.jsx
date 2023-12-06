import React, { createContext, useEffect, useReducer } from "react";
export const PokeListContext = createContext([]);

const initialState = {
  currentPoke: JSON.parse(localStorage.getItem("currentDexPoke")) ?? null,
  pokeList: [],
  currentPokeList: [],
  canSearch: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Curr_Poke":
      localStorage.setItem("currentDexPoke", JSON.stringify(action.payload));
      return { ...state, currentPoke: action.payload };
    case "Update_PokeList":
      return { ...state, pokeList: action.payload };
    case "Update_CurrentPokeList":
      return { ...state, currentPokeList: action.payload };
    case "Update_CanSearch":
      return { ...state, canSearch: action.payload };
    default:
      return state;
  }
};

const PokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const data = await response.json();
        const pokemonUrls = data.results.map((pokemon) => pokemon.url);
        const pokemonData = await Promise.all(
          pokemonUrls.map((url) => fetch(url).then((res) => res.json()))
        );
        dispatch({ type: "Update_PokeList", payload: pokemonData });
        dispatch({ type: "Update_CurrentPokeList", payload: pokemonData });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchAllPokemon();
  }, []);

  let passValue = { state, dispatch };
  return (
    <PokeListContext.Provider value={passValue}>
      {children}
    </PokeListContext.Provider>
  );
};
export default PokeProvider;
