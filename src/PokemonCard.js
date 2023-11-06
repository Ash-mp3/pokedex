// link to main css file
// import { list } from 'postcss';
import './App.src.css'; 
import { useState, useEffect } from 'react';

const FetchAndRenderPokes = () => {

    const [pokes, setpokes] = useState([])

    useEffect (() => {
        const FetchAllPokemon = async () => {
            const pokesApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json())
            FetchPokemon(pokesApi.results)
            console.log(pokesApi.results)
        }
        const FetchPokemon = async (pokesApi) => {
            let urls = []
            pokesApi.map((elem) => {
                return urls.push(elem.url)
            })
            const pokemonData = await Promise.all(urls.map((elem) => {
                return fetch(elem).then((res) => res.json())
            }))
            setpokes(pokemonData)
        }
        FetchAllPokemon()
    }, [])
   
    const print = (pokes) => {
        return pokes.map((elem, i) => {
        let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elem.id}.png`

        console.log(elem)
            return (
                <div className='pokeCard w-full md:w-auto md:grow' key={i}><p key={i}>{elem.name}</p><img src={pokeImg} alt={elem.name}/></div>
            )
        })
    }
    return <div className='screenDiv w-11/12 md:w-4/5 xl:w-3/4'>{print(pokes)}</div>;
    
    
}


function PokemonCard() {
  return (
        <FetchAndRenderPokes />
  );
}

export default PokemonCard;