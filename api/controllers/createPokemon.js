const { pokemon, type } = require('../src/db');

const crearPokemon = async ({ name, image, life, attack, defense, speed, height, weight, types }) => {
    const tiposExistentes = await type.findAll();
    const tipos = tiposExistentes.filter((tipoExistente) => {
        return types.includes(tipoExistente.name);
    });

    const typeValue = tipos.length > 0 ? tipos.map((tipo) => ({ name: tipo.name })) : "No hay tipos aún";

    const response = await pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        type: typeValue,
    });




    return response;

}

module.exports = crearPokemon;
