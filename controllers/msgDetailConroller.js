const { findMessage } = require('../db/queries');

async function getMessageDetail(req, res) {
  const message = await findMessage(req.params.id);
  console.log(message);
  if (!message) {
    return res.status(404).send('Message not found');
  }
  res.render('messageDetails', { message: message });
}

module.exports = { getMessageDetail };
