import React from 'react';
import {useEffect} from 'react';
//Components
import WorkoutDetail from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok){
        dispatch({type: 'SET_WORKOUT', payload:json})
      }
    }

    fetchWorkouts()
  }, [dispatch])
  
  return (
    <div className='home'>
        <div className="workouts">
          {workouts && workouts.map((workout) => (
            <WorkoutDetail key={workout._id} workout = {workout} />
          ))}
        </div> 
        <div className="FormFields">
            <WorkoutForm />
        </div>
    </div>
  )
}

export default Home