const { getAllPokemons } = require('../controllers/getAllPokemons');

const allPokemonsHandler = async (req, res) => {

    try {
        const allPokemons = await getAllPokemons();
        res.status(200).json(allPokemons)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

module.exports = { allPokemonsHandler };