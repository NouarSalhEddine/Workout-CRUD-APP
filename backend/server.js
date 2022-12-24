require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')

//express app 

const app = express()

//routes

app.use('/api/workouts', workoutRoutes)

// listen for request 

app.listen(process.env.PORT, () => {
  console.log("listen to port 4000");
})