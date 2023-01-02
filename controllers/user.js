 const User= require('../models/Users')


module.exports.updateUser=async(req,res)=>{
    try{

        const updatedUser= await User.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json(updatedUser);

    }catch(err){
        res.status(500).json(err)

        
    }
};

module.exports.deleteUser=async(req,res)=>{
    try{

        const deletedUser= await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedUser);

    }catch(err){
        res.status(500).json(err)
    }
};

module.exports.getUser=async(req,res)=>{
    try{
        const getUser=await User.findById(req.params.id)
        res.status(200).json(getUser);

    }catch(err){
        res.status(500).json(err)
    }
};
    

module.exports.getUsers=async(req,res)=>{
    try{
        const getUsers=await User.find()
        res.status(200).json(getUsers);

    }catch(err){
        res.status(500).json(err)
    }
};
    