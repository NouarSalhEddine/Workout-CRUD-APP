import React from "react";
import axios from "axios"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
// date fns 
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function WorkoutsDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
   await axios
   .delete(`http://localhost:4000/api/workouts/${workout._id}`)
     .then(function (response) {
     const json = response.data
     dispatch({type : 'DELETE_WORKOUTS' , payload: json})
   });
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Kg) :</strong> {workout.load}
      </p>
      <p>
        <strong>Reps :</strong> {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt) , {addSuffix : true})} </p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutsDetails;
