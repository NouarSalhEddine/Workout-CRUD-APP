const mongoose = require('mongoose')

const schema = mongoose.schema

const workoutSchema = new schema({
  
  title: {
    type: string,
    required : true
  },
  reps: {
    type: number,
    required : true
  },
  load: {
    type: number, 
    required : true
  }
  
}, { timestramps: true })


module.exports = mongoose.model('workout' , workoutSchema)