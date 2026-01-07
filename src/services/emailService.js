const { MailerSend } = require('mailersend');
const dotenv = require('dotenv');
dotenv.config();

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

async function sentEmail(to, toName, subject, html, text = "") {
    try {
        const sentEmail = await mailersend.email.send({
            from: {
                email: process.env.MAILERSEND_FROM_EMAIL,
                name: process.env.MAILERSEND_FROM_NAME|| "Time de suporte",

            },
            to: [
                {
                    email: to,
                    name: toName || to,
                },
            ],
            subject: subject,
            html: html,
            text: text,
        })
        return { success: true, data: sentEmail };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, error: error.message };
    }
}

module.exports = {sentEmail};