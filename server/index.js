import express from 'express'
import { Nuxt, Builder } from 'nuxt'
const YouTube = require('youtube-node')
const youTube = new YouTube()
youTube.setKey('AIzaSyDvwXUsN2hDGHCvrUeclxFFffgGLlGv8OE')
const bodyParser = require('body-parser')

// import api from './api'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const server = require('http').createServer(app)
const io = require('socket.io')(server)
// const io = require('socket.io-client')('http://localhost')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
// app.use('/api', api)

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

let playlist = []

app.get('/api/query', (req, res) => {
  youTube.search(req.query.query, 50, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(result, null, 20))
    }
  })
})

app.post('/api/post', (req, res) => {
  console.log(req.body)
  res.send('okja')
})

// socket.io
io.on('connection', (socket) => {
  console.log('a user connected : ' + socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected : ' + socket.id)
  })
})

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
server.listen(port, host)
console.log('Server listening on localhost:' + port)
// app.listen(port, host)
// console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
