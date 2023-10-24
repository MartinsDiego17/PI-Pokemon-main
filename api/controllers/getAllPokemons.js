const axios = require('axios');

const getAllPokemons = async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=60');
    const allPokemons = response.data.results;
    return allPokemons;

};

module.exports = { getAllPokemons };
