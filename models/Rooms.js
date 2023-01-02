//Appels des modules
const mongoose=require('mongoose');
const {Schema}= mongoose

const roomShema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        maxPeople:{
            type:Number,
            required:true
        },
        roomNumbers:{
            type:[{number:Number, unavailableDates:[{type: [Date]}]}],
            
        }
    },
    {
        timestamps:true


    }

)

module.exports=mongoose.model("Room", roomShema);