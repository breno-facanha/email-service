async function sendEmail(req, res){
    console.log('Enviando email...');
    res.status(200).send('Email enviado com sucesso');
}

module.exports = {
    sendEmail,
};