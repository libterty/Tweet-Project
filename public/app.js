import path from 'path'
import bodyParser from 'body-parser'
import { router } from './router'
import { notFound, logErrors } from './middlewares'
const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.static(path.join(__dirname)))

/** express 4.0 or above need body-parser to support router */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/** router function */
app.use('/', router)

/** error handlers */
app.use(notFound)
app.use(logErrors)

/** allow us to show our html pages */
app.get('/', (req, res) => {
  res.sendfile('index.html')
})

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
)
