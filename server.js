const express = require('express')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static(__dirname + "/assets"))

app.use('/api/cars', require('./routes/cars'))


mongoose.connect('mongodb://127.0.0.1:27017')

    .then(() => {
        app.listen(port, () => {
            console.log(`App listen on ${port} port`)
        })
    })

