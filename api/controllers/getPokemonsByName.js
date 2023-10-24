const axios = require('axios');
/* const { pokemon } = require('../src/db'); */

const getPokemonsByName = async (name) => {

    name = name.toLowerCase();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = response.data;
    let tiposAPI = [];
    pokemon.types.forEach(type => {
        tiposAPI.push(type.type.name)
    })
    const pokemonFound = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        hp: pokemon.stats[0]["base_stat"],
        attack: pokemon.stats[1]["base_stat"],
        defense: pokemon.stats[2]["base_stat"],
        speed: pokemon.stats[5]["base_stat"],
        height: pokemon.height,
        weight: pokemon.weight,
        type: tiposAPI
    }
    return pokemonFound;

}

module.exports = getPokemonsByName;
