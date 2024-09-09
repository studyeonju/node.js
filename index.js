const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('안녕하세요 node.js study start')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})