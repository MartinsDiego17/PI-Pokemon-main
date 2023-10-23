const axios = require('axios');

const getAllPokemons = async (req, res) => {
    try {
        const response1 = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const allPokemons1 = response1.data.results;

        const response2 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
        const allPokemons2 = response2.data.results;

        const response3 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20');
        const allPokemons3 = response3.data.results;

        const allPokemons = [...allPokemons1, ...allPokemons2, ...allPokemons3]

        return res.status(200).json(allPokemons)
    } catch (error) {
        return res.status(404).json({ error: 'No se han encontrado pokemones'})
    }
}

module.exports = { getAllPokemons };
