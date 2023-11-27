import "../App.src.css";
import { useContext } from "react";
import { PokeListContext } from "./PokeContext";
const Dex = () => {
  const { state } = useContext(PokeListContext);
  let currPoke = state.currentPoke;
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currPoke.id}.png`;
  let moveArr = [...currPoke.moves].slice(0, 4);

  return (
    <div className="dex text-xs sm:w-4/5  md:w-3/4 lg:w-2/3 xl:w-3/5">
      <div className="dexScreenLinner flex justify-center items-center w-11/12 md:w-4/5 xl:w-3/4">
        <div className="dexScreen flex flex-col">
          <div className="pokeInfo flex relative">
            <div className="imgDiv w-1/2 sm:w-2/5 flex justify-center  ">
              <img
                src={pokeImg}
                alt="currPoke.name"
                className=" pokeImg w-full mb-4"
              />
              <p className="pokeNum text-xl">
                <span className="text-lg">No.</span>
                {currPoke.id <= 9 ? " 0" : " "}
                {currPoke.id <= 99 ? "0" : ""}
                {currPoke.id}
              </p>
            </div>
            <div className="nameDiv w-1/2 sm:w-3/5 flex flex-col ">
              <div className="absolute sm:static w-1 sm:w-auto flex justify-center sm:block top-[-10px]">
                <p className=" text-center sm:text-left text-3xl sm:text-[40px]">
                  {currPoke.name}
                </p>
              </div>
              <div className="statDiv flex-grow flex flex-col justify-around mt-7 sm:mt-0">
                <p className="text-xl sm:text-3xl flex justify-between ">
                  <span>Type: </span>
                  <span>
                    {currPoke.types.map((type) => {
                      return (
                        <span
                          className="text-xl flex-grow sm:text-3xl block lg:inline"
                          key={type.type.name}
                        >
                          {type.type.name}

                          {type === currPoke.types[1] ? "" : "/"}
                        </span>
                      );
                    })}
                  </span>
                </p>
                <p className="text-xl sm:text-3xl flex justify-between">
                  <span>Ht: </span>
                  <span>{currPoke.height / 10}</span>
                </p>
                <p className="text-xl sm:text-3xl flex justify-between">
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
                  <p className="text-xl sm:text-3xl w-3/5 self-center">
                    {move.move.name}
                  </p>
                  <p className="text-xl sm:text-3xl self-center">/</p>
                  <p className="text-xl sm:text-3xl self-center">86</p>
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
