const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // console.log(req.url,req.method,req.headers);
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        // fs.writeFileSync('message.txt','dummy')

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first web page</title></head>');
    res.write('<body><h1>hi from me</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();  halt event loop once request is made
}

module.exports = requestHandler;

// IF WE WANT TO EXPORT MULTIPLE FILE WE USE OBJECTS
// module.exports={
//     handler: requestHandler,
//     someText: 'somethin'
// }