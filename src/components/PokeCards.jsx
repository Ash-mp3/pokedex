const PokeCards = ({ poke }) => {
	const currPoke = poke;
	let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
	return (
		<>
			<div className=" rightEdgeDiv  absolute w-10 h-10 top-3 right-3"></div>
			<p className="left-[10px]">{poke.name}</p>
			<img src={pokeImg} alt={poke.name} />
			<p className=" right-[10px] bottom-2">
				<span className="text-lg">No.</span>
				{currPoke.id <= 9 ? " 0" : " "}
				{currPoke.id <= 99 ? "0" : ""}
				{currPoke.id}
			</p>
			<div className=" LeftEdgeDiv  absolute w-10 h-10 bottom-3 left-3"></div>
		</>
	);
};
export default PokeCards;
