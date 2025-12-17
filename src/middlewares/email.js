async function validateSenEmail(req, res, next){
    const { to, toName, subject, html } = req.body;

    if(!to || !toName || !subject || !html){
        return res.status(400).json({ error: "Parâmetros 'to', 'subject' e 'html' são obrigatórios." });
    }

    if(!to.includes('@')){
        return res.status(400).json({ error: "Email inválido." });
    }
    
    next();
}

module.exports = {
    validateSenEmail,
};