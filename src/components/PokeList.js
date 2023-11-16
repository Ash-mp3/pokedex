import { useContext, useReducer } from "react";
import { PokeListContext } from "./PokeContext";
import PokeCards from "./PokeCards";
import { Link } from "react-router-dom";

const PokeList = () => {
  const { state, dispatch } = useContext(PokeListContext);
  
  const updateCurrentPoke = (pokeId) => {
    dispatch({ type: "Set_Curr_Poke", payload: pokeId });
    console.log(pokeId);
  };
  console.log(state.currentPoke);
  return (
    <div className="listBody lg:w-3/4">
      <div className="screenDiv w-11/12 md:w-4/5 xl:w-3/4">
        {state.pokes.map((poke) => {
          return (
            <Link
              to={`/Dex`}
              key={poke.id}
              onClick={() => {
                updateCurrentPoke(poke);
              }}
            >
              <PokeCards poke={poke} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PokeList;
