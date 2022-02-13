require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

// app
const app = express()

// apply middlewares
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }))
app.use(bodyParser.json({ limit: '100mb' }))
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(cors())

app.listen(process.env.PORT, () => {
   console.log('Server running at port: ', process.env.PORT)
})
