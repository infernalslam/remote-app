const express = require('express')
const app = express()
const YouTube = require('youtube-node')
const youTube = new YouTube()
youTube.setKey('AIzaSyDvwXUsN2hDGHCvrUeclxFFffgGLlGv8OE')

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/api/youtube', function (req, res) {
  youTube.search(req.query.query, 50, (error, result) => {
    if (result) {
      res.send(JSON.stringify(result, null, 20))
    } else res.status(500).send(error)
  })
  // res.send({query: req.query.query})
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
