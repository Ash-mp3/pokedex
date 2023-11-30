import { useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import pokeMag from "../images/pokemon_mag.png";
import { PokeListContext } from "./PokeContext";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Search = () => {
  const { state, dispatch } = useContext(PokeListContext);
  const [typeList, setTypeList] = useState([]);
  const [currType, setCurrType] = useState("");
  const [currSearch, setCurrSearch] = useState("");

useEffect(() => {
  nameSearch();
}, [currSearch]);

useEffect(() => {
    typeSearch(); 
}, [currType]);

  const nameSearch = () => {
    let currentPokeLists;
    !currType ? currentPokeLists = state.pokeList : currentPokeLists = state.currentPokeList;

    const re = new RegExp(`${currSearch}`, "i");
    const newCurrPokeList = currentPokeLists.filter((poke) =>
      re.test(poke.name)
    );
    if (newCurrPokeList.length !== 0) {
      dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
    } else {
      dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
    }
    return newCurrPokeList;
  };

  const typeSearch = () => {
    let currentPokeLists;
    !currType ? currentPokeLists = nameSearch() : currentPokeLists = state.currentPokeList;

    const re = new RegExp(`${currType}`);
    const newCurrPokeList = currentPokeLists.filter((poke) => {
      return poke.types.some((type) => re.test(type.type.name));
    });
    dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
    return newCurrPokeList
  };

  useEffect(() => {
    const getTypeOptions = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/generation/1/");
      const data = await res.json();
      const types = [];
      data.types.forEach((type) => {
        types.push(type.name);
        setTypeList([...types]);
      });
    };
    getTypeOptions();
  }, []);

  return (
    <>
      <TextField
        label="Search Pokemon"
        placeholder="Search"
        variant="outlined"
        type="search"
        onChange={(e) => {
          if (e.target.value === "") {
            setCurrSearch("")
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCurrSearch(e.target.value);
          }
        }}
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
      />

      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id="typeInput">type</InputLabel>
          <Select
            value={currType}
            label="type"
            onChange={(e) => {
              setCurrType(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            {typeList.map((type) => {
              return <MenuItem value={type} key={type}>{`${type}`}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Search;
