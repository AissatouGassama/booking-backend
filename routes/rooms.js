const express=require('express');
const { createRoom, updateRoom, deleteRoom, getRooms, getRoom } = require('../controllers/room');
const router = express.Router();

const { verifyAdmin } = require('../utils/verifyuser');



//CREATE
router.post('/:hotelId', verifyAdmin, createRoom)
//UPDATE
router.put('/:id',  verifyAdmin, updateRoom)
//DELETE
router.delete('/:id', verifyAdmin, deleteRoom)

// GET HOTEL
router.get('/:id', getRoom)

//GET ALL
router.get('/', getRooms)



module.exports=router;
