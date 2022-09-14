
// copy form node js doc 

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/HTML');
//   res.end('hello');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// what is REPL ?
//Read–Eval–Print Loop
// we can also use the '_' coat in repl to print the previous variable value


// creat server by me

const http =require("http")
http.createServer((req,resp)=>{

resp.write("<h1> hello it's chinku </h1>  ")
resp.end()

}).listen(8000)