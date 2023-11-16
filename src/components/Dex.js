import "../App.src.css";
import { useContext, useReducer } from "react";
import { PokeListContext } from "./PokeContext";
const Dex = () => {
  const { state, dispatch } = useContext(PokeListContext);
  let currPoke = state.currentPoke
  console.log(currPoke);
  return (
    <div className="dex sm:w-2/3 md:w-3/5 lg:w-1/3">
      <div className="dexScreenLinner flex justify-center items-center w-11/12 md:w-4/5 xl:w-3/4">
        <div className="dexScreen ">
          <p>{currPoke.name}</p>
          <p>No.: 0{currPoke.id}</p>
          <img />
          <p>height: {currPoke.height}</p>
          <p>weight: {currPoke.weight}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Dex;
