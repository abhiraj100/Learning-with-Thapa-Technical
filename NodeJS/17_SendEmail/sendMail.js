const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the SMTP server  -> Ethereal is a fake SMTP service
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            // user: testAccount.user,  // generated ethereal user
            // pass: testAccount.pass, // generated ethereal password

            user: "louie.aufderhar@ethereal.email",
            pass: "zmeggtj2pDyAteje9b",
        },
    });

    let info = await transporter.sendMail({
        from: ' "Abhiraj Yadav " <louie.aufderhar@ethereal.email>',  // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ",  // Subject line
        text: "Hello world?",  // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
    // res.send("I am sending mail");
};

module.exports = sendMail;
