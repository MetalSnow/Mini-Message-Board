const { Router } = require('express');
const { messages } = require('./indexRouter');

const newMessageRouter = Router();

newMessageRouter.get('/new', (req, res) => {
  res.render('form');
});

newMessageRouter.post('/new', (req, res) => {
  const msg = req.body;

  messages.push({
    text: msg.messageText,
    user: msg.authorName,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = { newMessageRouter };
