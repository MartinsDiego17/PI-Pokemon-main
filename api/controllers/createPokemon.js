const { pokemon, type } = require('../src/db');

const crearPokemon = async ({ id, name, image, life, attack, defense, speed, height, weight, types }) => {

    const tiposExistentes = await type.findAll();

    const tipos = tiposExistentes.filter((tipoExistente) => {
        return types.includes(tipoExistente.nombre);
    });

    const typeValue = tipos.length > 0 ? tipos.map((tipo) => ({ nombre: tipo.nombre })) : "No hay tipos aún";
    console.log(typeValue)

    const response = await pokemon.create({
        id,
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
