import React, { useState,useEffect } from 'react';
import { formatDistanceToNow,  parseISO } from 'date-fns';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import EditWorkoutModal from './EditWorkoutModal';

const WorkoutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // This effect will re-run when the workout details change
    console.log('Workout details updated in WorkoutDetail:', workout);
  }, [workout]);

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const refetchData = () => {
    setIsEditing(false);
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok){
        dispatch({type: 'SET_WORKOUT', payload:json})
      }
    }

    fetchWorkouts()
  }

  return (
    <div className="workoutDetails">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(parseISO(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}>Delete</span>
      <button onClick={handleEdit}>Edit</button>

       {/* Render the modal when isEditing is true */}
      {isEditing && (
        <EditWorkoutModal
          workout={workout}
          onClose={refetchData} // Pass a function to close the modal
        />
      )}
    </div>
  );
};

export default WorkoutDetail;