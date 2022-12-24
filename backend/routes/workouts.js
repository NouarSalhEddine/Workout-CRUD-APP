const express = require('express')
const workoutModel = require('../models/workoutModel')
const router = express.Router()

//GET all workouts

router.get('/', async (req, res) => {

  try {
    const workouts = await workoutModel.find({})
    res.status(200).json(workouts)
  } catch (error) {
    res.status(400).json({error : error.message})
    
  }
  
})

//GET a single workout 

router.get('/:id', (req, res) => {
  res.json({ mssg : ' GET Single workout'})
})

//POST a new workout

router.post('/', async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await workoutModel.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (error) {
   res.status(400).json({error : error.message})
  }
})

// DELETE a workout

router.delete('/:id', (req, res) => {
  res.json({ mssg : ' DELETE a  workout'})
})
// UPDATE a workout

router.patch('/:id', (req, res) => {
  res.json({ mssg : ' UPDATE a  workout'})
})

module.exports = router