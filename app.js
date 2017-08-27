const express = require('express')
const app = express()

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/api/youtube', function (req, res) {
  res.send('Hello World!')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
