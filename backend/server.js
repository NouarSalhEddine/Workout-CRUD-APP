require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app 

const app = express()

//middleware

app.use(express.json())

//routes

app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(() => {
  // listen for request 
app.listen(process.env.PORT, () => {
  console.log("listen to port 4000");
})
}).catch((error) => {
  console.log(error)
})

