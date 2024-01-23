const express = require('express')
const {createWorkout, getWorkouts, getSingleWorkouts,deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const router = express.Router()

// get all workouts
router.get('/',getWorkouts)

//get single workout
router.get('/:id', getSingleWorkouts)

//post new workout
router.post('/', createWorkout)

//delete new workout
router.delete('/:id', deleteWorkout)

//update new workout
router.patch('/:id', updateWorkout)

module.exports = router