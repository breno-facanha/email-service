async function authSecret(req, res, next) {
    const auth = req.headers.authorization;
    
    if (!auth) {
        return res.status(401).send('Chave não informada');
    }
    if (auth !== process.env.SECRET_KEY) {
        return res.status(401).send('Chave inválida');
    }
    next();
}

module.exports = {
    authSecret,
};