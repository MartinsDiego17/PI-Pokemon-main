const axios = require('axios');
const { pokemon } = require('../src/db');

const getPokemonsByName = async (name) => {

    name = name.toLowerCase();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonAPI = response.data;
    let tiposAPI = [];
    pokemonAPI.types.forEach(type => {
        tiposAPI.push(type.type.name)
    })
    const pokemonFoundAPI = {
        id: pokemonAPI.id,
        name: pokemonAPI.name,
        image: pokemonAPI.sprites.front_default || pokemonAPI.sprites.other["official-artwork"].front_default,
        hp: pokemonAPI.stats[0]["base_stat"],
        attack: pokemonAPI.stats[1]["base_stat"],
        defense: pokemonAPI.stats[2]["base_stat"],
        speed: pokemonAPI.stats[5]["base_stat"],
        height: pokemonAPI.height,
        weight: pokemonAPI.weight,
        type: tiposAPI
    }
    const pokemonFoundDB = await pokemon.findOne({ where: { name: name } })
    if (pokemonFoundDB) {
        const pokemonDB = {
            id: pokemonFoundDB.id,
            name: pokemonFoundDB.name,
            image: pokemonFoundDB.image,
            life: pokemonFoundDB.life,
            attack: pokemonFoundDB.attack,
            defense: pokemonFoundDB.defense,
            speed: pokemonFoundDB.speed,
            height: pokemonFoundDB.height,
            weight: pokemonFoundDB.weight
        }
    }

    if (!pokemonFoundDB) return pokemonFoundAPI;

    return [pokemonFoundAPI, pokemonDB];

}

module.exports = getPokemonsByName;
