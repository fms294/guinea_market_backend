const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const send_sms = (name, phone, otp) => {
    client.messages
        .create({
            body: `Hey ${name}, We've received a request to reset your password for Dibida App Account. If you didn't make this request ignore this SMS. Otherwise here is the Verification Code : ${otp} Thanks, The Dibida Team.`,
            from: '+10000000000', //Provide mobile number used of Twilio Account
            to: `+224${phone}` //Country code and then the variable phone comes from the function call
        })
        .then(message => console.log("response of sms : ",message.sid));
}

module.exports = { send_sms };
