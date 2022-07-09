const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()


app.use(cors())
app.use(express.json())

app.listen( port, () => {
    console.log(`server is running on port ${port}`.yellow.bold)
})