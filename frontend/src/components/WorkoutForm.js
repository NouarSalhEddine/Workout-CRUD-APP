import React, { useState } from "react";
import axios from "axios";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
function WorkoutForm() {
  const {  dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);


  
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

        setEmptyFields([])
        dispatch({type:'CREATE_WORKOUTS',payload:response.data})

      })
      .catch((error) => {
        setError(error.response.data.error);
        setEmptyFields(error.response.data.emptyfields)
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
        className = {emptyFields.includes('title') ? 'error' : ''}
      />
      <label>Load (in Kg) :</label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
        className = {emptyFields.includes('load') ? 'error' : ''}
      />
      <label>Reps :</label>
      <input
        type="number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
        className = {emptyFields.includes('reps') ? 'error' : ''}
      />

      <button> Add Workout </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
