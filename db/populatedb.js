const { Client } = require('pg');
require('dotenv').config();

const messages = [
  {
    text: 'Hello, im a Business man :D',
    username: 'Aiden',
    added: new Date(),
  },
  {
    text: 'Hello, im a software engineer',
    username: 'Metal',
    added: new Date(),
  },
  {
    text: 'Hi, im an architect',
    username: 'Bob',
    added: new Date(),
  },
  {
    text: 'hey, im a doctor',
    username: 'Vincent',
    added: new Date(),
  },
];

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR ( 255 ),
username VARCHAR ( 255 ),
added TIMESTAMP
)`;

async function main() {
  console.log('Sending...');
  console.log(process.env.DB_URL);
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();
  await client.query(SQL);

  for (const message of messages) {
    await client.query(
      'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
      [message.text, message.username, message.added]
    );
    console.log(`Inserted message from ${message.user}`);
  }

  await client.end();
  console.log('done');
}

main();
