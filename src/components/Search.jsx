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
  const [typeList, setTypeList] = useState([]);
  const [currType, setCurrType] = useState("");

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
        onKeyDown={handleSearch}
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
            onChange={(event) => {
              setCurrType(event.target.value);
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
