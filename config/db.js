const mongoose=require('mongoose');
require('dotenv').config();


mongoose.set('strictQuery', false);


    const connect= async()=>{
        try{
            await mongoose.connect(process.env.MONGO_URI,
                {useNewUrlParser:true, useUnifiedTopology: true })
                console.log("Database is connected")
        }catch{((error) => console.log(`Error
        connecting to MongoDB ${error}`));
    }

    }

    module.exports={connect}