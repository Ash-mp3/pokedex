import { useContext, useEffect, useRef } from "react";
import { PokeListContext } from "../utils/PokeContext";
import PokeCards from "./PokeCards";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import PikaGif from "../images/pika.gif";
import Dpad from "../images/dpad.png";
import DexMic from "../images/dexMic.png";

const PokeList = () => {
	const { state, dispatch } = useContext(PokeListContext);
	const AButtonRef = useRef();
    const BButtonRef = useRef();
    //update the current poke based on the id
	const updateCurrentPoke = (pokeId) => {
		dispatch({ type: "Set_Curr_Poke", payload: pokeId });
	};
    // set canSearch to true because we are in pokelist screen
	useEffect(() => {
		dispatch({
			type: "Update_CanSearch",
			payload: true,
		});
	}, [dispatch]);

	return (
		<div className="listBody lg:w-3/4">
			<div className=" w-28 hidden md:flex flex-col gap-y-56 mb-20 items-center mx-auto">
				<img src={DexMic} alt="mic" className="w-4/6 self-center" />
                <img src={Dpad} alt="dpad" className="w-5/6" />
			</div>
            <div className="screenDiv w-11/12 md:w-4/5 xl:w-3/4">
                {/* conditional rendering pokeList based on if there are no matches */}
				{state.currentPokeList !== "x" &&
				state.currentPokeList.length !== 0 ? (
					state.currentPokeList.map((poke) => {
                        // when a poke is clicked, update the current poke, and route to dex
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
					<img className="w-1/6 h-1/6 m-auto" alt="pika" src={PikaGif} />
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
				<img src={DexMic} alt="mic" className="w-4/6 self-center" />
				<div className="w-full h-[100px] relative">
					<div
						ref={AButtonRef}
						onMouseOver={() => {
							AButtonRef.current.style.backgroundColor =
								"#343434";
						}}
						onMouseOut={() => {
							AButtonRef.current.style.backgroundColor = "black";
						}}
						className="bg-black w-8 h-8 rounded-full text-center flex justify-center items-center text-white absolute right-4 top-4"
					>
						A
					</div>
					<div
						ref={BButtonRef}
						onMouseOver={() => {
							BButtonRef.current.style.backgroundColor =
								"#343434";
						}}
						onMouseOut={() => {
							BButtonRef.current.style.backgroundColor = "black";
						}}
						className="bg-black w-8 h-8 rounded-full text-center flex justify-center items-center text-white absolute left-4 bottom-4"
					>
						B
					</div>
				</div>
			</div>
		</div>
	);
};
export default PokeList;
