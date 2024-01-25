import React, { useState } from 'react' 
// import { isValid, parseISO } from 'date-fns' 
import { useWorkoutsContext } from '../hooks/useWorkoutsContext' 

const EditWorkoutModal = ({ workout, onClose }) => {
  const { dispatch } = useWorkoutsContext() 
  const [formData, setFormData] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps,
    // createdAt: workout.createdAt, // Preserve the original createdAt value
  }) 

  const handleInputChange = (e) => {
    const { name, value } = e.target 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })) 
  } 

  const handleUpdate = async () => {
    // Ensure that createdAt is a valid date before updating
    // const parsedDate = parseISO(formData.createdAt) 

    // if (isValid(parsedDate)) {
      // Format the date before updating if needed
    //   const formattedDate = parsedDate.toISOString()  // Adjust the format if necessary

      // Make a PATCH request to update the workout
      const response = await fetch(`/api/workouts/${workout._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      }) 
      const json = await response.json()

      if (response.ok) {
        // If the update was successful, dispatch the 'UPDATE_WORKOUT' action
        dispatch({type: 'UPDATE_WORKOUT',payload: json,})
        setFormData(json)

        // Close the modal
        onClose()
      } else {
        console.error('Failed to update workout:', response.statusText)
        // Handle error (show an error message, etc.)
      }
    // } else {
    //   console.error('Invalid date:', formData.createdAt)
    //   // You might want to handle this case appropriately, e.g., show an error message
    // }
  } 

  return (
    <div className="modal">
      <div className="modlaContainer">
        <h3>Edit Workout</h3>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        <label>Load (Kg)</label>
        <input type="number" name="load" value={formData.load} onChange={handleInputChange} />
        <label>Reps</label>
        <input type="number" name="reps" value={formData.reps} onChange={handleInputChange} />
        {/* Preserve the original createdAt value */}
        <input type="hidden" name="createdAt" value={formData.createdAt} />
        <div className="Modbuttons">
        <button onClick={handleUpdate}>OK</button>
        <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  ) 
} 

export default EditWorkoutModal 