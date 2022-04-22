const express = require('express')
const db = require('../db/index')

const comments_router = express.Router()
module.exports = comments_router


comments_router.use(express.json());

comments_router.get('/', (req, res, next) =>{
    db.query('SELECT * FROM comments', (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

comments_router.get('/:name', (req, res, next) =>{
    db.query('SELECT * FROM comments WHERE account_name = $1', [req.params.name], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

comments_router.post('/post/:name', (req, res, next) =>{
    db.query('INSERT INTO comments (account_name, comment) VALUES ($1 , $2)', [req.params.name, req.body.comment], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(201).send()
    })
})

comments_router.put('/update/:id', (req, res, next) =>{
    db.query('UPDATE comments SET comment = $1 WHERE id = $2', [req.body.comment ,req.params.id], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(204).send()
    })
})