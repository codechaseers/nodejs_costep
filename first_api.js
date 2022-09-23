let domy=require('./domy.js')
const http=require('http');
const { json } = require('stream/consumers');

http.createServer((requ,resp)=>{
resp.writeHead(200,{'content-type':'application\json'})
resp.write(JSON.stringify(domy));
resp.end()

}).listen(80)