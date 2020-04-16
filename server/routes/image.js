const router = require('express').Router()
const request = require('superagent')

// GET - /api/v1/madlibs

const apiUrl= 'https://pixabay.com/api/'
const apiKey= '16080411-fcd2594964a6cf0837f1b8626'

// https://pixabay.com/api/?key=16080411-fcd2594964a6cf0837f1b8626&q='search'

router.get('/:image', (req, res) => {
  request.get(apiUrl)
  .query({key: apiKey, q:req.params.image})
  .then(apiRes => {
    res.json(apiRes.body.hits[0])
  })
})

module.exports = router
