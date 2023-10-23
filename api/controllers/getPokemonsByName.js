const axios = require('axios');

const getPokemonsByName = async (req, res) => {

    try {
        const response = await axios('https://pokeapi.co/api/v2/pokemon');
        const allPokemons = response.data.results;
        const { name } = req.query;
        const pokemonsFound = allPokemons.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase() || pokemon.name.toUpperCase() === name.toUpperCase());
        if (pokemonsFound.length < 1) return res.status(404).json({ error: 'No hemos encontrado pokemones con ese nombre☹' })
        return res.status(200).json(pokemonsFound)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }


}

module.exports = { getPokemonsByName };
