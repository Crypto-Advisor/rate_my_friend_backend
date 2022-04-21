const { Pool } = require('pg')

const pool = new Pool({
    database: 'rate_my_friend'
})

module.exports = {
    query: (text, params, callback) =>{
        return pool.query(text, params, callback)
    },
}