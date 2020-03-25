var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    // Break up the url requested from the search 
    const q = url.parse(req.url, true);
    let fileread;
    if (q.pathname === '/') {
        fileread = './index.html';
    } else {
        fileread = '.' + q.pathname + '.html';
    }
    fs.readFile(fileread, function(err, data) {
        if (err) {
            // if there is an error display the error page 
            const errorPath = './404.html';
            fs.readFile(errorPath, function(err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        } else {
            // if no errors display the fileread 
            res.writeHead(200, { 'Content-Type' : 'text/html' });
            res.write(data);
            return res.end();
        }
    });

}).listen(8080);