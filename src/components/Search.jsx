import { TextField } from "@mui/material";
import { useContext } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import pokeMag from "../images/pokemon_mag.png";
import { PokeListContext } from "./PokeContext";

const Search = () => {
  const { state, dispatch } = useContext(PokeListContext);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const userInput = e.target.value.toLowerCase();
      runSearch(userInput);
      e.target.value = "";
    }
  };

  const runSearch = (userInput) => {
    const re = new RegExp(`${userInput}`, "i");
    const newCurrPokeList = state.pokeList.filter((poke) => re.test(poke.name));
    if (newCurrPokeList.length !== 0) {
      dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
    } else {
      dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
      alert("input valid pokemon");
    }
  };

  return (
    <>
      <TextField
        label="Search Pokemon"
        id="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={pokeMag}
                alt="pokemon magnifying glass"
                id="searchImg"
              />
            </InputAdornment>
          ),
        }}
        placeholder="Search"
        variant="outlined"
        type="search"
        onKeyDown={handleSearch}
      />
    </>
  );
};

export default Search;
