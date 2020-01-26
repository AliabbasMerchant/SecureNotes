require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const webSocketHandler = require('./websocket');

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    dbName: 'SecureNotes',
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
app.set('io', io);

webSocketHandler.init(io);

app.use(cors());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(passport.initialize())
passportInit()

app.use(cookieParser(process.env.COOKIES_SECRET));
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true
    })
);

app.use(express.static(__dirname + '/client/build/'));

app.use('/', require('router'));

server.listen(process.env.PORT, process.env.IP);
