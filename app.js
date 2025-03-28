const express = require('express');
const path = require('node:path');
const { indexRouter } = require('./routes/indexRouter');
const { newMessageRouter } = require('./routes/newMessageRouter');
const { msgDetailRouter } = require('./routes/msgDetailRouter');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/', newMessageRouter);
app.use('/', msgDetailRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
