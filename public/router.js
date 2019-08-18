import Twit from 'twit'
const express = require('express')
export const router = express.Router()

const T = new Twit({
  consumer_key: 'LXcBwDIt0YNvZ8Vi8jpeIJiEN',
  consumer_secret: 'fuSrPuBldk1iNQ3UL9LB2lyKhr2uWRZArT5SwXOtgc8U8nDkVH',
  access_token: '3667027934-IEatl4tJ0Vz6GeMlWBEKepGhfAWfWzgS8WJZcjq',
  access_token_secret: 'jITcHDk74MqEWWldk5LSdySFKV2omxJCvVQ8lbmzoX3bk',
  timeout_ms: 60 * 1000
})

router.get('/tweets', (req, res) => res.send('Home Page'))
router.get('/tweets/:search', (req, res) => {
  T.get('search/tweets', { q: req.params.search, count: 5 }, function(
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

router.post('/comment/', (req, res) => {
  console.log(req.body.comment)
  T.post('statuses/update', { status: req.body.comment }, function(
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err)
    } else {
      res.json(req.body.comment)
    }
  })
})
