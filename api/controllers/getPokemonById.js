const axios = require('axios');
const { pokemon, type } = require('../src/db');
const getPokemonById = async (id) => {

    //API
    if (id.length < 6) {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonFound = response.data;
        let tiposAPI = [];
        pokemonFound.types.forEach(type => {
            tiposAPI.push(type.type.name)
        })
        const pokemonAPI = {
            id,
            name: pokemonFound.name,
            image: pokemonFound.sprites.front_default,
            life: pokemonFound.stats[0]["base_stat"],
            attack: pokemonFound.stats[1]["base_stat"],
            defense: pokemonFound.stats[2]["base_stat"],
            speed: pokemonFound.stats[5]["base_stat"],
            height: pokemonFound.height,
            weight: pokemonFound.weight,
            tipo: tiposAPI
        }
        return pokemonAPI;
    }
    
    //DATABASE 
    if (id.length === 35) {
        const pokemonFound2 = [await pokemon.findAll(id, { include: { model: type } })];
        const newPokemon = pokemonFound2.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                life: pokemon.life,
                attack: pokemon.attack,
                defense: pokemon.defense,
                height: pokemon.height,
                weight: pokemon.weight
            }
        })
        return newPokemon[0];
    }


}


module.exports = { getPokemonById };

/* //if(idRaza.toString().length > 3){
      //Busco BD
      const dogDb = [await Dog.findByPk(idRaza, {include: {model: Temperaments}})]
      const newTotal = dogDb.map((dog)=>{
          return {
              name: dog.name,
              weight: {metric: dog.weight},
              height: {metric: dog.height},
              life_span: dog.life_span,
              temperament:dog.Temperaments.map(element => element.dataValues.name).join(', ').trim()
              //Devuelve array
          }
      })
      return newTotal[0];
  } */

//const typeFoundInDB = type.findOne({ where: { id } });
//let tiposDB = typeFoundInDB.nombre;