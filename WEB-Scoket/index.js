const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// socket connection
io.on('connection', (client) => {
    console.log('a user connected', client.id);
});

server.listen(9000, () => {
    console.log('server is running on port 9000');
});