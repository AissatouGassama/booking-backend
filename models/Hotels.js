//Appels des modules
const mongoose=require('mongoose');
const {Schema}= mongoose

const hotelShema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        adress:{
            type:String,
            required:true
        },
        rooms:{
            type:[String],
            required:true
        },
        photos:{
            type:[String],
            required:true
        },
        price:{
            type:Number, 
            required:true
        },
        rating:{
            type:Number,
            min:0,
            max:5,
            required:true
        }
    },
    {
        timestamps:true


    }

)

module.exports=mongoose.model("Hotel", hotelShema);