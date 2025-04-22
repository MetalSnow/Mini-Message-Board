const { getAllMessages } = require('../db/queries');

async function getMessages(res, res) {
  const messages = await getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

module.exports = { getMessages };
