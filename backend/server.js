require("dotenv").config();
const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app 
 
const app = express();
  
//middleware  
app.use(cors())
app.use(express.json());  

//routes

app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connect to dataBase with mongoose");
    });
  })
  .catch((error) => {
    console.log(error);
  });
