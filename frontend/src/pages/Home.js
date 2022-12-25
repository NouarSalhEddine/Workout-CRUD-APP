import React,{useEffect , useState} from 'react'
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
    <div>
      <div className="workouts">
        {
          workouts && workouts.map((workout, index) => {
            return (
              <p key={workout._id}> {workout.title } </p>
            )
          })
        }
       </div>
    </div>
  )
}

export default Home