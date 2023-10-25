const crearPokemonController = require('../controllers/createPokemon');

const crearPokemonHandler = async (req, res) => {

    try {
        const { name, image, life, attack, defense, speed, height, weight, types } = req.body;
        const creado = await crearPokemonController({ name, image, life, attack, defense, speed, height, weight, types });
        res.status(200).json(creado)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = crearPokemonHandler;