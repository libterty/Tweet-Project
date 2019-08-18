import path from 'path'
import bodyParser from 'body-parser'
import { router } from './router'
const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.static(path.join(__dirname)))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.get('/', (req, res) => {
    res.sendfile('index.html')
})

app.listen(port, () =>
    console.log(`Server is running at http://localhost:${port}`)
)