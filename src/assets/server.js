const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 5000;

sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); // ضع مفتاح API الخاص بك هنا

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;

    const msg = {
        to: email,
        from: 'your-email@example.com', // بريدك الإلكتروني
        subject: subject,
        text: text,
    };

    sgMail.send(msg)
        .then(() => {
            res.status(200).send('Email sent');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send(error.toString());
        });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
