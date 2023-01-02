
const jwt=require('jsonwebtoken');





// VERIFICATION DU TIOKEN DE L'UTILISATEUR
module.exports.verifyToken= (req,res,next)=>{
    const token =req.cookies.access_token;
    if(!token){ 
    return('not authenticated');
    
}
jwt.verify(token, process.env.JWT,(err,user)=>{
    if(err)
    return('token is not valid')
req.user= user;
next()
}); 

};







