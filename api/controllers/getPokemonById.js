const axios = require('axios');
const { Pokemon } = require('../src/db');
const getPokemonById = async (req, res) => {



    try {
        const { id } = req.params;
        if (id > 1017 || id < 1) return res.status(404).json({ error: 'No hay pokemones con ese ID' });
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonFound = response.data;
        const foundInDB = Pokemon.findOne({ where: { ID: id } });
        let tipos = [];
        pokemonFound.types.forEach(type => {
            tipos.push(type.type.name)
        })
        const pokemonFoundDetailsAPI = {
            id,
            name: pokemonFound.name,
            image: pokemonFound.sprites.front_default,
            vida: pokemonFound.stats[0]["base_stat"],
            ataque: pokemonFound.stats[1]["base_stat"],
            defensa: pokemonFound.stats[2]["base_stat"],
            velocidad: pokemonFound.stats[5]["base_stat"],
            altura: pokemonFound.height,
            peso: pokemonFound.weight,
            tipo: tipos
        }
        const pokemonFoundDetailsDB = {
            id: foundInDB.ID,
            name: foundInDB.Nombre,
            image: foundInDB.Imagen,
            vida: foundInDB.Vida,
            ataque: foundInDB.Ataque,
            defensa: foundInDB.Defensa,
            velocidad: foundInDB.Velocidad,
            altura: foundInDB.Altura,
            peso: foundInDB.Peso,
            tipo: tipos,
        }
        return res.status(200).json([pokemonFoundDetailsAPI, pokemonFoundDetailsDB]);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }

}


module.exports = { getPokemonById };