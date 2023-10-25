const axios = require('axios');
const { pokemon, type } = require('../src/db');
const getPokemonById = async (id) => {
    //API
    if (id.length < 6) {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonFound = response.data;
        let tiposAPI = [];
        pokemonFound.types.forEach(type => {
            tiposAPI.push(type.type.name)
        })
        const pokemonAPI = {
            id,
            name: pokemonFound.name,
            image: pokemonFound.sprites.front_default,
            life: pokemonFound.stats[0]["base_stat"],
            attack: pokemonFound.stats[1]["base_stat"],
            defense: pokemonFound.stats[2]["base_stat"],
            speed: pokemonFound.stats[5]["base_stat"],
            height: pokemonFound.height,
            weight: pokemonFound.weight,
            tipo: tiposAPI
        }
        return pokemonAPI;
    }

    //DATABASE 
    if (id.length === 36) {
        const pokemonFoundIndB = await pokemon.findByPk(id)
        const newPokemon = {
            id: pokemonFoundIndB.id,
            name: pokemonFoundIndB.name,
            image: pokemonFoundIndB.image,
            life: pokemonFoundIndB.life,
            attack: pokemonFoundIndB.attack,
            defense: pokemonFoundIndB.defense,
            height: pokemonFoundIndB.height,
            weight: pokemonFoundIndB.weight
        }

        return newPokemon;
    }


}


module.exports = { getPokemonById };

