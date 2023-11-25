import { useContext } from "react";
import { PokeListContext } from "./PokeContext";
import PokeCards from "./PokeCards";
import { Link } from "react-router-dom";

const PokeList = () => {
  const { state, dispatch } = useContext(PokeListContext);
  
  const updateCurrentPoke = (pokeId) => {
    dispatch({ type: "Set_Curr_Poke", payload: pokeId });
  };
  return (
    <div className="listBody lg:w-3/4">
      <div className="screenDiv w-11/12 md:w-4/5 xl:w-3/4">
        {state.currentPokeList.map((poke) => {
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
        })}
      </div>
    </div>
  );
};
export default PokeList;
