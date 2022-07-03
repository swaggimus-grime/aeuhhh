const { google } = require('googleapis');
const mailer = require('nodemailer');
const express = require('express');
require('dotenv').config()
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(cors());

const client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`server listening on port ${port}`)});

app.put("/send-mail", cors(), async (req, res) => {
    res.send(req.body);
    let email = req.body.email;
    const token = await client.getAccessToken();
    const transporter = mailer.createTransport({
        port: process.env.PORT,
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.CLIENT_EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: token
        }
    });

    const options = {
        from: 'Tim Allen',
        to: email,
        subject: 'Swag',
        text: 'swag swag',
        attachments: [{
            filename: 'timage.jpg',
            path: __dirname + '/../src/res/tim.jpg',
            cid: 'timage'
        }],
        html: `<h1>Aeuhhh</h1>
               <p>aeuhhh<\p>
               <img src="cid:timage"> </img>`
    }

    await transporter.sendMail(options);
});



