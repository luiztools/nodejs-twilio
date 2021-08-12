const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: 'whatsapp:+55-SEU-NUMERO-AQUI',
        from: process.env.TWILIO_NUMBER,
        body: 'Your appointment is coming up on July 21 at 5PM',
    })
    .then(message => console.log(message))
    .catch(err => console.error(err));