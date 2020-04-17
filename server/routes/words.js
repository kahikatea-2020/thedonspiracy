const router = require('express').Router()
const request = require('superagent')

const apiURL = 'https://wordsapiv1.p.mashape.com/words/'
const apiKey = 'bb40d6f114mshdf7a37d9d272de7p173c4ajsn6ce8729a0f4f'

// GET - /api/v1/words
router.get('/', (req, res) => {
  return request.get(apiURL)
    .set('X-Mashape-Key', apiKey)
    .set('Accept', 'application/json')
    .query({ partOfSpeech: req.query.word })
    .then(apiRes => {
      res.json(apiRes.body.word)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
// https://wordsapiv1.p.mashape.com/words/?partOfSpeech=verb
// GET https://wordsapiv1.p.mashape.com/words?random=true

// http://localhost:3000/api/v1/words/?word=verb
