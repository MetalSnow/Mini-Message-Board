const { nanoid } = require('nanoid');
const { messages } = require('./indexController');

function getForm(req, res) {
  res.render('form');
}

function createMessage(req, res) {
  const msg = req.body;

  messages.unshift({
    id: nanoid(),
    text: msg.messageText,
    user: msg.authorName,
    added: new Date(),
  });

  res.redirect('/');
}

module.exports = { getForm, createMessage };
