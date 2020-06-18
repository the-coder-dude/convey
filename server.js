const express = require('express');
const app = express();
const app = require('http').createServer(handler)
const io = require('socket.io')(app);



require('dotenv/config');

app.get('/', (req, res) => {

    res.send('Still building!')
})


app.listen(process.env.PORT, () => {

    console.log("Server has started on " + process.env.PORT)
})

