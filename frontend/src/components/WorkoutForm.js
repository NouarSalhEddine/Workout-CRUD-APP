import React,{useState} from 'react'

function WorkoutForm() {
  const [title , setTitle] = useState('')
  const [load , setLoad] = useState('')
  const [reps, setReps] = useState('')
  
  return (
    
    <form className='create' >
      <h3>Add a New Workout</h3>
        <label >Excersize Title :</label>
      <input
        type="text"
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
      />
        <label >Load (in Kg) :</label>
      <input
        type="number"
        onChange={(e) => { setLoad(e.target.value) }}
        value={load}
      />
        <label >Reps :</label>
      <input
        type="number"
        onChange={(e) => { setReps(e.target.value) }}
        value={reps}
      />
       
      <button> Add Workout </button>
    </form>
  )
}

export default WorkoutForm