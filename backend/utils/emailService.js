const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
        user: 'your-email@gmail.com', // your email, replace it
        pass: 'your-email-password', // your email password, replace it
    },
});

// Function to generate OTP
const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000); // generates a 6-digit OTP
    return otp;
};

// Function to send OTP email
const sendOTPEmail = (recipientEmail, otp) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: recipientEmail,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { generateOTP, sendOTPEmail };