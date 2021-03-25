const express = require('express');

const config = require('./config/app');

const app = express();

const port = config.appPort;

app.get('/home', (req, res) => {
    return res.send('Home');
})

app.get('/login', (req, res) => {
    return res.send('Login screen works now');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

console.log('Hello word');
