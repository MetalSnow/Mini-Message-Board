const { insertMessage } = require('../db/queries');

function getForm(req, res) {
  res.render('form');
}

async function createMessage(req, res) {
  const msg = req.body;

  const newMessage = {
    text: msg.messageText,
    username: msg.authorName,
    added: new Date(),
  };

  await insertMessage(newMessage);

  res.redirect('/');
}

module.exports = { getForm, createMessage };
