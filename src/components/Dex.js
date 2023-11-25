import "../App.src.css";
import { useContext, useReducer } from "react";
import { PokeListContext } from "./PokeContext";
const Dex = () => {
  const { state, dispatch } = useContext(PokeListContext);
  let currPoke = state.currentPoke;
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currPoke.id}.png`;
  let moveArr = [...currPoke.moves].slice(0, 4);
  console.log(moveArr);
  console.log(typeof currPoke.id);

  return (
    <div className="dex sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5">
      <div className="dexScreenLinner flex justify-center items-center w-11/12 md:w-4/5 xl:w-3/4">
        <div className="dexScreen flex flex-col">
          <div className="pokeInfo flex">
            <div className="imgDiv w-2/5 flex justify-center items-center flex-col">
              <img src={pokeImg} alt="currPoke.name" className="w-full" />
              <p className="text-xl">
                <span className="text-lg">No.</span>
                {currPoke.id <= 9 ? " 0" : " "}
                {currPoke.id <= 99 ? "0" : ""}
                {console.log(currPoke.id)}
                {currPoke.id}
              </p>
            </div>
            <div className="nameDiv w-3/5 flex flex-col">
              <div>
                <p className="text-4xl">{currPoke.name}</p>
              </div>
              <div className="statDiv flex-grow flex flex-col justify-around">
                <p>
                  {currPoke.types.map((type) => {
                    return (
                      <span className="text-3xl flex-grow" key={type.type.name}>
                        {type.type.name}/
                      </span>
                    );
                  })}
                  <span className="text-3xl">type</span>
                </p>
                <p className="text-3xl flex justify-between">
                  <span>Ht: </span>
                  <span>{currPoke.height / 10}</span>
                </p>
                <p className="text-3xl flex justify-between">
                  <span>Wt: </span>
                  <span>{currPoke.weight / 10} lb</span>
                </p>
              </div>
            </div>
          </div>
          <div className="dexDivider"></div>
          <div className="pokeAttacks flex flex-col">
            {moveArr.map((move) => {
              return (
                <div
                  key={move.move.name}
                  className="flex justify-between flex-grow"
                >
                  <p className="text-3xl w-3/5 self-center">{move.move.name}</p>
                  <p className="text-3xl self-center">/</p>
                  <p className="text-3xl self-center">86</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dex;
