const express = require('express');
const app = express();

const { Food } = require('./models/Food');

const db = require('./config/connection');
const PORT = process.env.PORT || 3001;



db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
    });
})