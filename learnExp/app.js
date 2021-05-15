const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const { mainModule } = require('process');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);//filter
app.use(shopRoutes);

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})
 app.listen(3000)

 // *********** --CREATE SERVER WITHOUT USING EXPRESS-- ****
 // const http = require('http');
// const server =  http.createServer(app);
// server.listen(3000);

// ****** --MIDDLEWARE-- *******
// app.use((req,res,next)=>{
//     console.log('middle ware');
//     next(); // allows to continue to next middle ware
// })