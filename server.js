const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const server = require('http').Server(app);
const path = require('path');
const { check } = require('./modules/facebook_checker');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const clientPath = path.join(__dirname, 'client');

app.use(express.static(clientPath));
app.get('/', async (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});
app.get('/check', async (req, res) => {
    const { username, password } = req.query;
    if (!username || !password) {
        res.send(false);
        return;
    }
    const result = await check(username, password);
    res.send(result);
})
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
