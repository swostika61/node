const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
// /admin/add-products --> because we use filter in app.use => GET
router.get('/add-product',(req,res,next)=>{
    // console.log(' middle ware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

// /admin/add-products => POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;