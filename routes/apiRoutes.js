const express = require('express')
const Book = require('../models/Book');

const apiRoutes = (app) => {
    app.get('/api/saved', (req, res) => {
        Book.find({})
            .then((data) => {
                console.log("Data: ", data);
                res.json(data);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    });
    
    app.post('/api/saved', (req, res) => {
        console.log('Body: ', req.body);
        const data = req.body;
    
        const newBook = new Book(data);
    
        newBook.save((error) => {
            if (error) {
                res.status(500).json({
                    msg: 'Sorry, internal servor errors'
                });
                return;
            }
    
            return res.json({
                msg: 'Your data has been saved!!!'
            });
        });
    });
    
    app.delete('/api/saved/:id', (req, res) => {
        Book.deleteOne( { _id: req.params.id } )
            .then((data) => {
                console.log("Success!");
            })
            .catch((error) => {
                console.log("Failed!");
            });
    });
    
} 


module.exports = apiRoutes;