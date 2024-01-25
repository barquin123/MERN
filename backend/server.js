require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// express app
const app = express()

app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to request
        app.listen(process.env.PORT, () => {
            console.log('connceted to db and listening port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
