const getPokemonsByName = require('../controllers/getPokemonsByName');

const pokemonsByNameHandler = async (req, res) => {

    try {
        const { name } = req.query;
        const allPokemonsFound = await getPokemonsByName(name);
        res.status(200).json(allPokemonsFound);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

module.exports = { pokemonsByNameHandler };