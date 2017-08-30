import { Router } from 'express'
const YouTube = require('youtube-node')
const youTube = new YouTube()
youTube.setKey('AIzaSyDvwXUsN2hDGHCvrUeclxFFffgGLlGv8OE')

const router = Router()

/* GET qyery youyube listing. */
router.get('/query', function (req, res) {
  youTube.search(req.query.query, 50, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(result, null, 20))
    }
  })
})

export default router
