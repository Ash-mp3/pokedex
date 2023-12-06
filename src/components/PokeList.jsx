import { useContext, useEffect, useRef } from "react";
import { PokeListContext } from "../utils/PokeContext";
import PokeCards from "./PokeCards";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import PikaGif from "../images/pika.gif";
import Dpad from "../images/dpad.png";
import DexMic from "../images/dexMic.png";
import DexCam from "../images/dex_cam.png";

const PokeList = () => {
  const { state, dispatch } = useContext(PokeListContext);
  const pokeCardHover = useRef();
  const updateCurrentPoke = (pokeId) => {
    dispatch({ type: "Set_Curr_Poke", payload: pokeId });
  };

  // const makeCardHover = () => {
  //   console.log(pokeCardHover.current);
  //   pokeCardHover.current.style.backgroundColor = "red";
  // };

  useEffect(() => {
    dispatch({
      type: "Update_CanSearch",
      payload: true,
    });
  }, []);

  return (
    <div className="listBody lg:w-3/4">
      <div className=" w-28 hidden md:flex flex-col gap-y-56 mb-20 items-center mx-auto">
        <img src={DexMic} className="w-4/6 self-center" />
        <img src={Dpad} className="w-5/6" />
      </div>
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
                ref={pokeCardHover}
              >
                <PokeCards poke={poke} />
              </Link>
            );
          })
        ) : state.currentPokeList !== "x" ? (
          <img className="w-1/6 h-1/6 m-auto" src={PikaGif} />
        ) : (
          <Alert
            className="h-1/6 m-auto relative"
            severity="error"
            variant="filled"
            color="error"
          >
            No Pokemon Matched Your Search
            <br />
            <ul className="mt-3 absolute right-6 bottom-5">
              <li>&#8594; try setting type to "none"</li>
              <li>&#8594; make sure to use correct spelling</li>
            </ul>
          </Alert>
        )}
      </div>
      <div className=" w-28 hidden md:flex flex-col gap-10 gap-y-56 mb-20 mx-auto">
        <img src={DexMic} className="w-4/6 self-center" />
        <div className="w-full h-[100px] relative">
          <div className="bg-black w-8 h-8 rounded-full text-center flex justify-center items-center text-white absolute right-4 top-4">
            A
          </div>
          <div className="bg-black w-8 h-8 rounded-full text-center flex justify-center items-center text-white absolute left-4 bottom-4">
            B
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokeList;
