const express = require('express')
const {readWorkouts , readWorkout , createWorkout} = require('../controllers/workoutController')
const router = express.Router()

//GET all workouts

router.get('/', readWorkouts )

//GET a single workout 

router.get('/:id', readWorkout)

//POST a new workout

router.post('/',createWorkout)

// DELETE a workout

router.delete('/:id', (req, res) => {
  res.json({ mssg : ' DELETE a  workout'})
})
// UPDATE a workout

router.patch('/:id', (req, res) => {
  res.json({ mssg : ' UPDATE a  workout'})
})

module.exports = router