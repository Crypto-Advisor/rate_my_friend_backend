const express = require('express')
const db = require('../db/index')

const ratings_router = express.Router()
module.exports = ratings_router

ratings_router.use(express.json());

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
    db.query('INSERT INTO ratings (account_name, num_ratings, rating) VALUES ($1, 1, $2)',[req.params.name, req.body.rating], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(201).send(req.body.rating)
    })
})

ratings_router.put('/:name', (req, res, next) =>{
    db.query('SELECT rating, num_ratings FROM ratings WHERE account_name = $1',[req.params.name], (err, result)=>{
        if(err){
            return next(err)
        }
        let old_rating = result.rows.rating
        let num_ratings = result.rows.num_ratings + 1
        let new_rating = (old_rating + req.body.rating) / num_ratings
    })
    db.query('UPDATE ratings SET num_ratings = num_ratings+1, rating = $1 WHERE account_name = $2', [new_rating, req.params.name], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(204).send(new_rating)
    })
})