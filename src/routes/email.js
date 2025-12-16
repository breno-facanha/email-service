const express = require('express');
const router = express.Router();
const middlewareEmail= require('../middlewares/email');
const controllerEmail = require('../controllers/email');

router.post('/send', 
    middlewareEmail.validateSenEmail, 
    controllerEmail.sendEmail
);

module.exports = router;