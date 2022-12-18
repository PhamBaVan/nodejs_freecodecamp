const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }  
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops</h1>
        <h2>We can't seem to find the page you are looking for</h2>
        <a href="/">back home </a>  
    `)
})

server.listen(5000)
