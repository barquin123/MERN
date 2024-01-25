const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workout
const getWorkouts = async(req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}


//get single workout
const getSingleWorkouts = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such Workout"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: "did not exist workout"})
    }

    res.status(200).json(workout)
}


//create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    let emptyFields = []

    if(!title) {
      emptyFields.push('title')
    }
    if(!load) {
      emptyFields.push('load')
    }
    if(!reps) {
      emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    //add doc to db
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete workout
const deleteWorkout = async(req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such Workout"})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({error: "workout don't exist"})
    }

    res.status(200).json(workout)
}

//Update workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }
    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(400).json({error: "workout don't exist"})
    }
    res.status(200).json(workout)
}


//export functions
module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkouts,
    deleteWorkout,
    updateWorkout
}