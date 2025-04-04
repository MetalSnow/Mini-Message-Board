const { nanoid } = require('nanoid');

const messages = [
  {
    id: nanoid(),
    text: 'Hello, im a Business man :D',
    user: 'Aiden',
    added: new Date(),
  },
  {
    id: nanoid(),
    text: 'Hello, im a software engineer',
    user: 'Metal',
    added: new Date(),
  },
  {
    id: nanoid(),
    text: 'Hi, im an architect',
    user: 'Bob',
    added: new Date(),
  },
  {
    id: nanoid(),
    text: 'hey, im a doctor',
    user: 'Vincent',
    added: new Date(),
  },
];
function getMessages(res, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

module.exports = { getMessages, messages };
