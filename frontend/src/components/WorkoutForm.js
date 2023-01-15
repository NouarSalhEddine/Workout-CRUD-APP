import React, { useState } from "react";
import axios from "axios";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
function WorkoutForm() {
  const {  dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    
    await axios
      .post("http://localhost:4000/api/workouts/", workout)
      .then((response) => {
        setLoad("");
        setTitle("");
        setReps("");
        setError(null);
        console.log("new workout added", response.data);
        dispatch({type:'CREATE_WORKOUTS',payload:response.data})

      })
      .catch((error) => {
        setError(error.response.data.error);
        console.log(error.response.data.error);
      });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Excersize Title :</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label>Load (in Kg) :</label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />
      <label>Reps :</label>
      <input
        type="number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
      />

      <button> Add Workout </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
