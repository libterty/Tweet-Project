import Twit from 'twit'
import fs from 'fs'
import path from 'path'
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

router.post('/upload/', (req, res) => {
  const filePath = path.join(__dirname, '../public', '/assets', '/images/')
  let image = filePath + req.body.image
  console.log(image)
  const b64content = fs.readFileSync(image, {
    encoding: 'base64'
  })

  // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function(
    err,
    data,
    response
  ) {
    let mediaIdStr = data.media_id_string
    let altText = 'test-test'
    let meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    console.log(mediaIdStr)
    console.log(meta_params)

    T.post('media/metadata/create', meta_params, function(err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        let params = {
          status: `${req.body.comment} #nofilter`,
          media_ids: [mediaIdStr]
        }

        T.post('statuses/update', params, function(err, data, response) {
          console.log(data)
          if (err) {
            console.log(err)
          } else {
            res.json(data)
          }
        })
      }
    })
  })
})
