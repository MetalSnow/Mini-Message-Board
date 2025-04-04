const { messages } = require('./indexController');

function getMessageDetail(req, res) {
  const message = messages.find((m) => m.id === req.params.id);
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('messageDetails', { message: message });
}

module.exports = { getMessageDetail };
