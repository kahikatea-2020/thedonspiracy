const router = require('express').Router()
const request = require('superagent')

// GET - /api/v1/madlibs

const apiUrl= 'https://pixabay.com/api/'
const apiKey= '16080411-fcd2594964a6cf0837f1b8626'

// https://pixabay.com/api/?key=16080411-fcd2594964a6cf0837f1b8626&q='search'

//change :image to something else when route is confirmed
// GET /api/v1/image/:image
router.get('/:image', (req, res) => {
  request.get(apiUrl)
  .query({key: apiKey, q:req.params.image})
  .then(apiRes => {
    res.json(apiRes.body.hits[0].userImageURL)
  })
})



/*
 {
  "adj1": "Succulent",
  "adj2": "Juicy",
  "adj3": "Moist",
  "adj4": "Wet",
  "pln1": "Lecturers",
  "pln2": "Students", get this image
  ""pln3"": "Human Skills Reps",
  "place1": "EDA",
  "place2": "China",
  "name1": "Lache Melvin",
  "name2": Bob Ross,
  "noun1": "pencil",
  "noun2": "laptop",
  "noun3": "finger",
  "noun4": "birds",
  "noun5": "book",
  "verbpresent": "Run",
  "verbpast": ate"",
  "verbfuture": "Sprint",

}
*/

// /api/v1/image

module.exports = router
