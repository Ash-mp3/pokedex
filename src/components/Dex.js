import "../App.src.css";
import { useContext, useState, useEffect } from "react";
import { PokeListContext } from "./PokeContext";
import { Link } from "react-router-dom";
import DexCam from "../images/dex_cam.png";
import DexMic from "../images/dexMic.png";
const Dex = () => {
  const { state, dispatch } = useContext(PokeListContext);
  let currPoke = state.currentPoke;
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currPoke.id}.png`;
  let moveArr = [...currPoke.moves].slice(0, 4);
  // const [currMove, setCurrMove] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const fetchedMovePower = await GetMovePower(move);
  //     setCurrMove(fetchedMovePower);
  //   })();
  // }, [currMove]);

  const GetMovePower = async (move) => {
    try {
      const url = move.move;
      console.log(url);
      const response = await fetch(`https://pokeapi.co/api/v2/move/${url}/`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      const moveDmg = data.power;
      console.log(moveDmg);
      return <p>loading...</p>;
    } catch (error) {
      console.error("Error fetching move data:", error);
      return <p>loading...</p>;
    }
  };
  return (
    <div className="dex flex flex-col sm:w-4/5  md:w-3/4 lg:w-2/3 xl:w-3/5">
      <div className="dexCameraDiv flex justify-between">
        <img src={DexCam} alt="camera lens" className="dexCamera" />
        <img src={DexMic} alt="mic" className="dexMic" />
      </div>

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
                  <span>
                    {((currPoke.height / 10) * 3.28084).toFixed(1)} Feet
                  </span>
                </p>
                <p className="text-xl sm:text-3xl flex justify-between">
                  <span>Wt: </span>
                  <span>{Math.round((currPoke.weight / 10) * 2.2)} lbs</span>
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
                  <p className="text-xl sm:text-3xl self-center">
                    {/* <GetMovePower move={move.move.url} /> */}
                    {/* {console.log(<GetMovePower move={move} />)} */}
                    {/* {GetMovePower(move)} */}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" text-2xl flex gap-40 mt-8">
        <Link
          to={`/Dex`}
          key={"next"}
          onClick={() => {
            if (state.currentPoke.id > 1) {
              dispatch({
                type: "Set_Curr_Poke",
                payload: state.pokeList[state.currentPoke.id - 2],
              });
            } else
              dispatch({
                type: "Set_Curr_Poke",
                payload: state.currentPoke,
              });
            // console.log(state.pokeList[state.currentPoke.id].name);
          }}
        >
          <i class="fa-sharp fa-solid fa-play fa-rotate-180"></i>
        </Link>
        <Link
          to={`/Dex`}
          key={"prev"}
          onClick={() => {
            if (state.currentPoke.id < 151) {
              dispatch({
                type: "Set_Curr_Poke",
                payload: state.pokeList[state.currentPoke.id],
              });
            } else {
              dispatch({
                type: "Set_Curr_Poke",
                payload: state.currentPoke,
              });
            }
          }}
        >
          <i class="fa-sharp fa-solid fa-play "></i>
        </Link>
      </div>
    </div>
  );
};

export default Dex;
