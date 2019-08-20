import Twit from 'twit'
const express = require('express')
export const router = express.Router()

/** Place your keys and tokens */
const T = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
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
    console.log(req)
    T.post('statuses/update', { status: req.body.comment }, function(
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