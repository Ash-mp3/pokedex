import { useContext, useEffect, useState } from "react";
import { PokeListContext } from "./PokeContext";
import pokeMag from "../images/pokemon_mag.png";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
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
    runSearch();
  }, [currSearch, currType]);

  const runSearch = () => {
    let newCurrPokeList = state.pokeList;
    if (currType) {
      const typeReg = new RegExp(`${currType}`);
      newCurrPokeList = newCurrPokeList.filter((poke) => {
        return poke.types.some((type) => typeReg.test(type.type.name));
      });
    }
    if (currSearch) {
      const searchReg = new RegExp(`${currSearch}`, "i");
      newCurrPokeList = newCurrPokeList.filter((poke) =>
        searchReg.test(poke.name)
      );
      if (newCurrPokeList.length === 0) {
        newCurrPokeList = 'x'
      }
    }
    dispatch({ type: "Update_CurrentPokeList", payload: newCurrPokeList });
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
        type="search"
        onChange={(e) => {
          if (e.target.value === "") {
            setCurrSearch("");
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCurrSearch(e.target.value);
            console.log(e.target.value);
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