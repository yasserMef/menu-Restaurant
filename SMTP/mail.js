const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: process.env.smtp_host,
    port: process.env.smtp_port,
    secure: true, // Use true for port 465, false for all other ports
    auth: {
    user: process.env.smtp_user,
    pass: process.env.smtp_pass,
    },
    });
  
    const sendEmail = async ({ receipients, subject, message }) => {
	return await transporter.sendMail({
		from: "aprenant2@talents4starups.com", // sender address
		to: receipients, // list of receivers
		subject: subject, // Subject line
		text: message, // plain text body
		html: message, // valid text body
	});
}
module.exports = sendEmail