const http = require('http');

// req-->request
// res-->result 
const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page');
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Home</a>`
    )
   
});

server.listen(5000);