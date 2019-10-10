const express = require('express');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const MovieController = require('./controllers/MovieController');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/movies', upload.single('thumbnail'), MovieController.store);
routes.get('/movies', MovieController.show);
routes.get('/details', MovieController.index);

module.exports = routes;