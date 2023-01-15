import React, { useEffect} from 'react'
import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import axios from 'axios';

function Home() {
  const { workouts, dispatch } = useWorkoutsContext()
  
  useEffect(() => {
    axios
    .get("http://localhost:4000/api/workouts/")
      .then(function (response) {
      const json = response.data
      dispatch({type : 'SET_WORKOUTS' , payload: json})
    });
}, [])

  return (
    <div className='home'>
      <div className="workouts">
        {
          workouts && workouts.map((workout, index) => {
            return (
              <WorkoutsDetails key={workout._id} workout={ workout} />
            )
          })
        }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home