const nodemailer = require("nodemailer");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const emailAddress = process.env.EMAIL_ACCOUNT;
const password = process.env.PASSWORD;
const client = require('twilio')(accountSid, authToken);

const send_sms = (name, phone, otp) => {
    client.messages
        .create({
            body: `Hey ${name}, We've received a request to reset your password for Dibida App Account. If you didn't make this request ignore this SMS. 
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`,
            from: '+15155236321', //Provide mobile number used of Twilio Account
            to: `+224${phone}` //Country code and then the variable phone comes from the function call
        })
        .then(message => console.log("response of sms : ",message.sid));
}

const send_sms_email = (name, email, otp) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: emailAddress,
            pass: password // Temp pass
        }
    });
    const message = {
        to: email,
        subject: "Verification Code for Reset Password",
        text:`Hey ${name}, We've received a request to reset your password for Dibida App Account. If you didn't make this request ignore this SMS. 
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`,
    };

    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

const change_password_send_sms = (name, phone, otp) => {
    client.messages
        .create({
            body: `Hey ${name}, We've received a request to change your password for Dibida App Account. If you didn't make this request ignore this SMS. 
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`,
            from: '+15155236321', //Provide mobile number used of Twilio Account
            to: `+224${phone}` //Country code and then the variable phone comes from the function call
        })
        .then(message => console.log("response of sms : ",message.sid));
}

const change_password_send_sms_email = (name, email, otp) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: emailAddress,
            pass: password // Temp pass
        }
    });
    const message = {
        to: email,
        subject: "Verification Code for Password Change",
        text: `Hey ${name}, We've received a request to change your password for Dibida App Account. If you didn't make this request ignore this SMS. 
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`
    };

    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

const registration_otp = (name, phone, otp) => {
    client.messages
        .create({
            body: `We've received a request for registration of your account with ${name} in Dibida App. If you didn't make this request ignore this SMS.
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`,
            from: '+15155236321', //Provide mobile number used of Twilio Account
            to: `+224${phone}` //Country code and then the variable phone comes from the function call
        })
        .then(message => console.log("response of sms : ",message.sid));
}

const registration_otp_email = (name, email, otp) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: emailAddress,
            pass: password // Temp pass
        }
    });
    const message = {
        to: email,
        subject: "Verification Code For Registration",
        text: `We've received a request for registration of your account with ${name} in Dibida App. If you didn't make this request ignore this Email.
Otherwise here is the Verification Code : ${otp} 
Thanks, The Dibida Team.`
    };

    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

module.exports = { send_sms, send_sms_email, change_password_send_sms, change_password_send_sms_email, registration_otp, registration_otp_email };
