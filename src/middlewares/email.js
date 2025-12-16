async function validateSenEmail(req, res, next){
    console.log('Validando envio de email...');
    next();
}

module.exports = {
    validateSenEmail,
};