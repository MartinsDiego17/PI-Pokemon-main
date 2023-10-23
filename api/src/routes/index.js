const { Router } = require('express');
const { getAllPokemons } = require('../../controllers/getAllPokemons');
const { getPokemonById } = require('../../controllers/getPokemonById');
const { getPokemonsByName } = require('../../controllers/getPokemonsByName')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons', getAllPokemons);

router.get('/pokemon/:id', getPokemonById);

router.get('/pokemons/name', getPokemonsByName)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
