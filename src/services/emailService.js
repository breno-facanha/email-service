const { MailerSend } = require('mailersend');

const mailersend = new MailerSend({
  api_key: process.env.MAILERSEND_API_KEY,
});

module.exports = mailersend;