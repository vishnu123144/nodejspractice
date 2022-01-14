var http =require('http');

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end('hello world')
}).listen(4000);

console.error(new Error('Hello this is wrong method'));

