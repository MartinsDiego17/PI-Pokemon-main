const { getPokemonById } = require('../controllers/getPokemonById');

const byId = async (req, res) => {

    try {
        const { id } = req.params;
        const pokemones = await getPokemonById(id);
        res.status(200).json(pokemones)
    } catch (error) {
        res.status(404).json({ error: error.message })

    }

}

module.exports = { byId };


