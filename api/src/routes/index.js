const { Router } = require('express');
const { byId } = require('../../handlers/getPokemonById');
const { allPokemonsHandler } = require('../../handlers/getAllPokemons');
const { pokemonsByNameHandler } = require('../../handlers/getPokemonsByName');
const crearPokemonHandler = require('../../handlers/createPokemon');
const getTypesHandler = require('../../handlers/getTypesHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', allPokemonsHandler);

router.get('/pokemon/:id', byId);

router.get('/pokemons/name', pokemonsByNameHandler);

router.post('/pokemons', crearPokemonHandler);

router.get('/types', getTypesHandler)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
