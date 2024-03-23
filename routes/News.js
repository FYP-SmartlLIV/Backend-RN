const express = require('express');
const News = require('../Models/News');

const router = express.Router();

router.get('/', async (req,res)=>{
    const news = await News.findOne({
        order: [ [ 'createdAt', 'DESC' ]],
        });
        res.json(news);
});
module.exports = router;