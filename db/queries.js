const pool = require('./pool');

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const findMessage = async (id) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = ($1)', [
    id,
  ]);
  return rows[0];
};

const insertMessage = async (message) => {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES($1, $2, $3)',
    [message.text, message.username, message.added]
  );
};

module.exports = {
  getAllMessages,
  insertMessage,
  findMessage,
};
