const express = require('express')
const db = require('../db/index')

const ratings_router = express.Router()
module.exports = ratings_router

ratings_router.get('/', (req, res, next) =>{
    db.query('SELECT * FROM ratings', (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

ratings_router.get('/:name', (req, res, next) =>{
    db.query('SELECT * FROM ratings WHERE account_name = $1', [req.params.name], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

ratings_router.post('/:name', (req, res, next) =>{
    db.query('', (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(201).send()
    })
})