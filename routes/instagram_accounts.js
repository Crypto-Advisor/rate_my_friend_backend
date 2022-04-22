const express = require('express')
const db = require('../db/index')

const instagram_router = express.Router()
module.exports = instagram_router

instagram_router.get('/', (req, res, next) =>{
    db.query('SELECT * FROM instagram_accounts', (err, result) =>{
        if (err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

//FINISH THIS ONE
instagram_router.get('/data/:name', (req, res, next) =>{
    db.query('', (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(200).send(result.rows)
    })
})

instagram_router.post('/add/:name', (req, res, next)=>{
    db.query('INSERT INTO instagram_accounts (account_name, account) VALUES ($1, false)', [req.params.name], (err, results)=>{
        if(err){
            return next(err)
        }
        res.status(201).send()
    })
})

instagram_router.put('/login/:name', (req, res, next)=>{
    db.query('UPDATE instagram_accounts SET account = true WHERE name = $1', [req.params.name], (err, results) =>{
        if(err){
            return next(err)
        }
        res.status(204).send()
    })
})