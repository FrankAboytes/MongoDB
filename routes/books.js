const express = require('express');
const router = express.Router();
const Book = require('../model/Book');

//GetAll
router.get('/', (req, res) => {
    Book.find()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({message: e})
        })
})

//Post
router.post('/', (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description
    });

    book.save()
    .then(data => {
        res.json(data);
    }).catch(e => {
        res.json({message: e})
    })
}); 

//Patch
router.patch('/:id', (req, res) => {
    Book.updateOne({
        _id: req.params.id},
        {
            $set:{description: req.body.description}
    })
    .then(data=> {
        res.json(data);
    })
    .catch(e => {
        res.json({message: e})
    })
});

//Delete
router.delete('/:id', (requ, res) => {
    Book.deleteOne({
        _id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(e =>{
            res.json({message: e})
        });
});

module.exports = router;