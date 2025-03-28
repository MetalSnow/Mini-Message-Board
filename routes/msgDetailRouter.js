const { Router } = require('express');
const { messages } = require('./indexRouter');

const msgDetailRouter = Router();

msgDetailRouter.get('/details/:id', (req, res) => {
  const message = messages.find((m) => m.id === req.params.id);
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('messageDetails', { message: message });
});

module.exports = { msgDetailRouter };
