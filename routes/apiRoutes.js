const express = require('express')
const Book = require('../models/Book');

const router = express.Router();

router.get('/', (req, res) => {
    Book.find({})
        .then((data) => {
            console.log("Data: ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Erro: ", error);
        });
});

module.exports = router;