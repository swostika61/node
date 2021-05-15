const http = require('http');
const routes = require('./routes')
// with ARROW
const server = http.createServer(routes);
server.listen(3000);
//CREATE SERVER
// function rqListener(req, res){

// }
// http.createServer(rqListener );
//***********************ANOYHER WAY ************
// http.createServer(function(req,res){
// })
