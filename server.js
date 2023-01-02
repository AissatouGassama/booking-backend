const express= require('express');
const cors=require("cors");
const cookieParser = require('cookie-parser')

require('dotenv').config({path: "./config/.env"});
const db=require("./config/db.js")
const usersRoute=require('./routes/users');
const hotelsRoute=require('./routes/hotels')
const roomsRoute=require('./routes/rooms')
const authRoute=require('./routes/auth')

//Application
const app=express();

//Connection db
db.connect();


//Listening
app.listen(8000, ()=>{
console.log('server running on 8000')

})


//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/auth", authRoute)