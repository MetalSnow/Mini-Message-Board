const { Router } = require('express');
const { messages } = require('./indexRouter');
const { nanoid } = require('nanoid');

const newMessageRouter = Router();

newMessageRouter.get('/new', (req, res) => {
  res.render('form');
});

newMessageRouter.post('/new', (req, res) => {
  const msg = req.body;

  messages.unshift({
    id: nanoid(),
    text: msg.messageText,
    user: msg.authorName,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = { newMessageRouter };
