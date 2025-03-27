const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hello, im a software engineer',
    user: 'Metal',
    added: new Date(),
  },
  {
    text: 'Hi, im an architect',
    user: 'Bob',
    added: new Date(),
  },
  {
    text: 'hey, im a doctor',
    user: 'Vincent',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = { indexRouter, messages };
