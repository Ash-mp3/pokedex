import dexLogo from "../images/dexLogo.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import { PokeListContext } from "../utils/PokeContext";
import Random from "./Random";

function Header() {
	const { state } = useContext(PokeListContext);
    //if canSearch is true render search, if false render random button
	return (
		<header className="header w-full flex justify-between py-[10px] px-[10px] sm:px-[35px] gap-5">
			<Link to="/pokedex">
				<img className="logo" src={dexLogo} alt="dex logo" />
			</Link>
			{state.canSearch ? (
				<div className="search flex items-center justify-center w-auto">
					<Search />
				</div>
			) : (
				<Random />
			)}
		</header>
	);
}

export default Header;
