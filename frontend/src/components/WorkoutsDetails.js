import React from "react";
import axios from "axios"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
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
      <p>{workout.createdAt} </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutsDetails;
