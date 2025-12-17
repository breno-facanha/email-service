const { sentEmail } = require("../services/emailService");

async function sendEmail(req, res){
    const { to, toName, subject, html } = req.body;
    
    try {
        const result = await sentEmail(to, toName, subject, html);

        if(!result.success){
            return res.status(500).json({ error: result.error || "Erro ao enviar email" });
        }

        return res.status(200).json({ message: "Email enviado com sucesso", data: result.data });

    } catch (error) {
        console.error('Erro no controlador de email:', error.message);
        return res.status(500).json({ error: 'Erro interno ao enviar email' });
    }
}

module.exports = {
    sendEmail,
};