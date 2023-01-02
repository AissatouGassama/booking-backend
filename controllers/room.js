const mongoose=require('mongoose');
const Hotels = require('../models/Hotels');
const Room=require('../models/Rooms')
require('../models/Hotels')

module.exports.createRoom=async(req, res,next)=>{
    const hotelId=req.params.hotelid;

    const newRoom=new Room(req.body)
    try{
         const savedRoom= await newRoom.save();

         try{
            await Hotels.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            })

            res.status(200).json(savedRoom)

         }catch(err){
            res.status(500).json(err)
         }

    }catch(err){

        res.status(500).json(err)
    
    }
};

module.exports.updateRoom=async(req,res)=>{
    try{

        const updatedroom= await Room.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json(updatedroom);

    }catch(err){
        res.status(500).json(err)

        
    }
};

module.exports.deleteRoom=async(req,res)=>{
    try{

        const deletedroom= await Room.findByIdAndDelete(req.params.id, {$set:req.body})
        res.status(200).json(deletedroom);

    }catch(err){
        res.status(500).json(err)
    }
};

module.exports.getRoom=async(req,res)=>{
    try{
        const getroom=await Room.findById(req.params.id)
        res.status(200).json(getroom);

    }catch(err){
        res.status(500).json(err)
    }
};

module.exports.getRooms=async(req,res)=>{
    try{
        const getrooms=await Room.find()
        res.status(200).json(getrooms);

    }catch(err){
        res.status(500).json(err)
    }
};
    