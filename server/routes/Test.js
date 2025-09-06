const express = require('express')
const Test = require('../models/Test')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        let data = await Test.find();
        let message = data.map(doc => doc.message);
        res.send(message);
    } catch (e){
        res.send(e)
    }
})

module.exports = router;