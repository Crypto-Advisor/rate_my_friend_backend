const express = require('express')
const app = express()
const port = 3000

const instagram_router = require('./routes/instagram_accounts');
const comments_router = require('./routes/comments');
const ratings_router = require('./routes/ratings');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
  res.send('Welcome to rate my friend!')
})
app.use('/accounts', instagram_router)
app.use('/comments', comments_router)
app.use('/ratings', ratings_router)



app.listen(port, () => {
  console.log(`Rating app listening on port ${port}`)
})