const fs = require('fs');
const lines = fs.readFileSync('lista.txt').toString();

const array = [];
lines.split('\n').forEach(item => {

    if (item.startsWith('+55') && item.length < 14) {
        const chars = [...item];
        chars.splice(5, 0, '9');
        item = chars.join('');
    }

    if (!array.includes(item))
        array.push(item);
})

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

function send(array, index) {
    if (index === array.length) return;

    return client.messages
        .create({
            to: array[index],
            from: process.env.TWILIO_NUMBER,
            body: 'Essa eu aprendi com o LuizTools!',
        })
        .then(message => {
            console.log(array[index]);
            console.log('Enviado ' + index + ' de ' + array.length);
            return send(array, index + 1);
        })
        .catch(err => {
            console.log(array[index]);
            console.error(err);
            process.exit(0);
        });
}

send(array, 0);