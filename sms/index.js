const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+55-NUMERO-DE-DESTINO',
        from: process.env.TWILIO_NUMBER,
        body: 'Aprendi essa com o LuizTools!',
    })
    .then(message => console.log(message))
    .catch(err => console.error(err));