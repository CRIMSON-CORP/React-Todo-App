const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const server = express();
dotenv.config();
server.use(express.static(__dirname));
server.use(express.static(path.join(__dirname, "Client", "build")));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

server.post("/contact_req", async (req, res) => {
    let details = `
        <h2>You recieved a message from ${req.body.fullname}</h2>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        <p>Sender's Email: <span>${req.body.email}</span></p>
        `;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        tls: {
            rejectUnauthorized: false,
            secureProtocol: "TLSv1_method",
        },
    });
    // send mail with defined transport object
    let maildata = {
        from: req.body.email,
        to: process.env.email,
        replyTo: req.body.email,
        subject: "You have Received a Message from Your Todo App",
        html: details,
    };
    transporter.sendMail(maildata, (err) => {
        if (err) {
            res.json({ success: false });
            return;
        } else {
            res.json({ success: true });
        }
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT);
