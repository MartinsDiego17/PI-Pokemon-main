const axios = require('axios');
const { type } = require('../src/db');

const getAllTypes = async () => {

    const response = await axios("https://pokeapi.co/api/v2/type");
    const allTypes = response.data.results.map(tipo => ({
        id: parseInt(tipo.url.split("/").at(-2)),
        name: tipo.name
    }));

    await type.bulkCreate(allTypes); 

    return allTypes;

}

module.exports = getAllTypes;
