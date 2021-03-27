// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googleLibrary';

const routes = require('./routes/apiRoutes');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('==> 🌱  MongoDB is connected.');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
      });
} else {
    console.log(process.env.NODE_ENV)
    app.get('/', (req, res) => {
        res.send("Api running");
    });
};

// HTTP request logger
app.use(morgan('dev'));
app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});