const express=require('express');
const { updateUser, deleteUser, getUser, getUsers} = require('../controllers/user');
const { verifyToken } = require('../utils/verifyToken');
const {verifyUser,verifyAdmin}=require('../utils/verifyuser');
const router = express.Router();

                // VERICATION DU LOGIN DE L'UTILISATEUR
              //  router.get("/checkauthentication", verifyToken,(req,res)=>{
                   // res.send('Hello user, you are logged in')
                
                    
               // })

                //VERIFICATION DE L'UTILISATEUR
                //router.get("/checkUser/:id", verifyUser,(req,res)=>{
                 //   res.send('you are logged')
                
                //})


                //VERIFICATION DE L'UTILISATEUR
                //router.get("/checkadmin/:id", verifyAdmin,(req,res)=>{
                  //  res.send('you are logged admin')
                
//                })


router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser);
router.get('/',verifyAdmin,  getUsers)


module.exports=router;