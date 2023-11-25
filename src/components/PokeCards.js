
const PokeCards = ({ poke }) => {
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
  return (
    <>
      <p>{poke.name}</p>
      <img src={pokeImg} alt={poke.name} />
    </>
  );
};
export default PokeCards;
