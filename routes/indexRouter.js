const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hello, im a software engineer',
    user: 'Metal',
    date: new Date(),
  },
  {
    text: 'Hi, im an architect',
    user: 'Bob',
    date: new Date(),
  },
  {
    text: 'hey, im a doctor',
    user: 'Vincent',
    date: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = { indexRouter };
