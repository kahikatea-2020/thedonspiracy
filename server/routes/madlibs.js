const router = require('express').Router()
const request = require('superagent')

// GET - /api/v1/madlibs
router.get('/', (req, res) => {
  request.get('url here').then(() => {})
})

module.exports = router
