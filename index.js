const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yeonju:1234@boilerplate.mfqkt.mongodb.net/?retryWrites=true&w=majority',{
 
// useNewUrlParser: true,  useUnifiedTopology: true,  useCreateIndex: true,   useFindAndModify: false
//mongoose 6버전 이상에선 더이상 useNewUrlParser, useUnifiedTopology, useFindAndModify, useCreateIndex 지원 안함

}).then(() => console.log('mongoDB connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕하세요 node.js study start')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})