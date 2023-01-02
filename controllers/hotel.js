
const Hotel=require('../models/Hotels')


module.exports.createHotel= async(req,res)=>{

    const new_hotel= new Hotel(req.body)
    try{

        const savedhotel= await new_hotel.save()
        res.status(200).json(savedhotel);

    }catch(err){
        res.status(500).json(err)

    }
};

module.exports.updateHotel=async(req,res)=>{
    try{

        const updatedhotel= await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json(updatedhotel);

    }catch(err){
        res.status(500).json(err)

        
    }
};

module.exports.deleteHotel=async(req,res)=>{
    try{

        const deletedhotel= await Hotel.findByIdAndDelete(req.params.id, {$set:req.body})
        res.status(200).json(deletedhotel);

    }catch(err){
        res.status(500).json(err)
    }
};

module.exports.getHotel=async(req,res)=>{
    try{
        const gethotel=await Hotel.findById(req.params.id)
        res.status(200).json(gehotel);

    }catch(err){
        res.status(500).json(err)
    }
};

module.exports.getHotels=async(req,res)=>{
    try{
        const gethotels=await Hotel.find()
        res.status(200).json(gethotels);

    }catch(err){
        res.status(500).json(err)
    }
};
    