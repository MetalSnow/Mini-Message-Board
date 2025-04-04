const { Router } = require('express');
const { getMessageDetail } = require('../controllers/msgDetailConroller');

const msgDetailRouter = Router();

msgDetailRouter.get('/details/:id', getMessageDetail);

module.exports = { msgDetailRouter };
