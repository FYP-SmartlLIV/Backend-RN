const express = require('express');
const Complain = require('../Models/Complain');
const Event = require('../Models/Event');

const router = express.Router();

router.post('/complain', async (req,res)=>{
    const complain = req.body;
    await Complain.create(complain);
    res.json(complain);
});
module.exports = router;