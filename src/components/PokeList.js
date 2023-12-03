import { useContext } from "react";
import { PokeListContext } from "./PokeContext";
import PokeCards from "./PokeCards";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import PikaGif from "../images/pika.gif";
import Green from "@mui/material/colors/green";

const PokeList = () => {
  const { state, dispatch } = useContext(PokeListContext);
  console.log(state.currentPokeList.length);
  const updateCurrentPoke = (pokeId) => {
    dispatch({ type: "Set_Curr_Poke", payload: pokeId });
  };

  return (
    <div className="listBody lg:w-3/4">
      <div className="screenDiv w-11/12 md:w-4/5 xl:w-3/4">
        {state.currentPokeList !== "x" && state.currentPokeList.length !== 0 ? (
          state.currentPokeList.map((poke) => {
            return (
              <Link
                className="pokeCard w-full md:w-auto md:grow"
                to={`/Dex`}
                key={poke.id}
                onClick={() => {
                  updateCurrentPoke(poke);
                }}
              >
                <PokeCards poke={poke} />
              </Link>
            );
          })
        ) : state.currentPokeList !== "x" ? (
          <img className="w-1/6 h-1/6 m-auto" src={PikaGif} />
        ) : (
          <Alert className="h-1/6 m-auto">No Pokemon Matched Your Search</Alert>
        )}
      </div>
    </div>
  );
};
export default PokeList;
