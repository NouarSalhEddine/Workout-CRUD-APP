import React, { useEffect, useState } from 'react'
import WorkoutsDetails from '../components/WorkoutsDetails';
import axios from 'axios';

function Home() {
  const [workouts , setWorkouts] = useState(null)
  
  useEffect(() => {
    axios
    .get("http://localhost:4000/api/workouts/")
    .then(function (response) {
      setWorkouts(response.data)
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
    </div>
  )
}

export default Home