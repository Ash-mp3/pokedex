import Dex from "./Dex";
const PokeCards = ({ elem, img }) => {
  let imgKey = `${elem.id}img`;
  let divKey = `${elem.id}div`;
  return (
    <div className="pokeCard w-full md:w-auto md:grow" key={divKey}>
      <a href="./Dex">
        <p key={elem.id}>{elem.name}</p>
        <img key={imgKey} src={img} alt={elem.name} />
      </a>
    </div>
  );
};

export default PokeCards;
