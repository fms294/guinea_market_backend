const nodemailer = require("nodemailer");

const sendForgetPasswordEmail = (email, name, otp) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "infoshopcart.lanet@gmail.com",
      pass: "lanetteam@1" // Temp pass
    }
  });
  const message = {
    to: email,
    subject: "Verification Code For Reset Password.",
    text: `Hey ${name},

                We've received a request to reset your password for Guinea Market App Account.
                If you didn't make this request ignore this mail. Otherwise here is the
                Verification Code : ${otp}
                

                Thanks,
                The Guinea Market Team.`
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = {
  sendForgetPasswordEmail
};
