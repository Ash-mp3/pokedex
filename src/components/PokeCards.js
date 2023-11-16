// import { Link } from "react-router-dom";
const PokeCards = ({ poke }) => {
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
  return (
    <div className="pokeCard w-full md:w-auto md:grow">
      <p>{poke.name}</p>
      <img src={pokeImg} alt={poke.name} />
    </div>
  );
};
export default PokeCards;
