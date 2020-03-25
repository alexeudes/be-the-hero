const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Desacopla o módulo de rotas do Express em uma nova variável.
const routes = express.Router();

// Rota de Login
routes.post('/session', SessionController.create);

// Listagem de Ongs
routes.get('/ongs', OngController.index);

// Cadastro de Ongs
routes.post('/ongs', OngController.create);

// Listagem de Casos
routes.get('/incidents', IncidentController.index);

// Cadastro de Casos
routes.post('/incidents', IncidentController.create);

// Deletar Caso
routes.delete('/incidents/:id', IncidentController.delete);

// Listar Caso de uma ONG específica
routes.get('/profile', ProfileController.index);


// Exporta o módulo para que possa ser utilizado por outros arquivos.
module.exports = routes;