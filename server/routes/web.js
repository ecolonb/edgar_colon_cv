const Routes = require('express').Router();
const webController = require('../controllers/web');
Routes.get('/', webController.home);

module.exports = {
  Routes
};
