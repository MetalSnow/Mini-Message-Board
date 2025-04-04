const { Router } = require('express');
const {
  createMessage,
  getForm,
} = require('../controllers/newMessageController');

const newMessageRouter = Router();

newMessageRouter.get('/new', getForm);

newMessageRouter.post('/new', createMessage);

module.exports = { newMessageRouter };
