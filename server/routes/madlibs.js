const router = require('express').Router()
const request = require('superagent')

router.get('/', (req, res) => {
  request.get('url here').then(() => {})
})

module.exports = router
