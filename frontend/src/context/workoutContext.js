import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        workouts: [action.payload, ...state.workouts],
      };
      case "DELETE_WORKOUTS":
        return {
          workouts:state.workouts.filter((w) => w._id !== action.payload._id),
        }
    default: 
      return state
  }
};
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workout: null })
  
  return <WorkoutsContext.Provider value={{...state, dispatch }}>
    {children}
    </WorkoutsContext.Provider>
    

}
