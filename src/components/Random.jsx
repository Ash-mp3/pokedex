import Button from "@mui/material/Button";
import { useContext } from "react";
import { PokeListContext } from "../utils/PokeContext";

const Random = () => {
	const { state, dispatch } = useContext(PokeListContext);

    // function to get random pokemon from the list
	const getRandomPoke = () => {
		const randomNum = Math.floor(Math.random() * 150) + 0;
		const randomPoke = state.pokeList[randomNum];
		dispatch({ type: "Set_Curr_Poke", payload: randomPoke });
	};

	return (
		<Button
			size="small"
			color="info"
			variant="contained"
			className="h-12 self-center"
			onClick={getRandomPoke}
		>
			Random Pokemon!
		</Button>
	);
};

export default Random;
