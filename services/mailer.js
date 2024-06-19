const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'konnectsphere@gmail.com',
        pass: 'cjnf jtoh cxgn qysg',
    },
});

// Function to send email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'konnectsphere@gmail.com',
        to: to,
        subject: subject,
        text: text,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = (formType, email, name) => {
    let subject, text;

    if (formType === 'client') {
        subject = emailConfig.clientEmailConfig.subject;
        text = emailConfig.clientEmailConfig.text(name);
    } else {
        subject = emailConfig.influencerEmailConfig.subject;
        text = emailConfig.influencerEmailConfig.text(name)
    }

    return sendEmail(email, subject, text);
};