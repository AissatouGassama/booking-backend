const User=require('../models/Users.js')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')


module.exports.register= async(req,res)=>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const new_user=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        const savedUser=await new_user.save();
        res.status(200).send("User has been created");

    }catch(err){
        res.status(500).json(err);
       
    }
};

module.exports.login= async(req,res)=>{
    try{
        const user= await User.findOne({username:req.body.username})
        if (!User)
        return next (createError(404,"User not found"));

        const isPassWordCorrect= await bcrypt.compare(req.body.password, user.password) 
        if(!isPassWordCorrect)
         return next (createError(404,"wrong password or username"));


         const token =jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT)


         const { password, isAdmin, ...otherDetails}= user._doc
         
         res
         .cookie("access_token", token, {
            httpOnly:true,
         })
         .status(200).json({...otherDetails})
        
    }catch(err){
        res.status(500).json("wrong password or username");
       
    }

}