 // Set up a web server on port 8080
 
var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname))
    .listen(8080, () => console.log('Server running on 8080...'));

// => Server running on: http://localhost:8080/index.html