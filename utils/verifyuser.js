const jwt=require('jsonwebtoken');
const {verifyToken}=require('./verifyToken')


// VERIFICATION DE L'UTILISATEUR

module.exports.verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id){
            next()
        }else{
          
          return('not authorized')
        }
    })
};

// VERIFICATION 

module.exports.verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
        next()
        }else{
          
          return('not authorized')
        }
    })
}