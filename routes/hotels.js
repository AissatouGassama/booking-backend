const express=require('express');
const { createHotel, updateHotel, deleteHotel, getHotels, getHotel } = require('../controllers/hotel');
const router = express.Router();
const Hotel=require("../models/Hotels");
const { verifyAdmin } = require('../utils/verifyuser');



//CREATE
router.post('/', verifyAdmin, createHotel)
//UPDATE
router.put('/:id',  verifyAdmin, updateHotel)
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET HOTEL
router.get('/', getHotels)

//GET ALL
router.get('/', getHotel)




module.exports=router;
