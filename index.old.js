const http = require ('http');

http.createServer((req,res)=> {

    console.log(req);
    res.writeHead(200, {'Content-Type':'application/json'});

    const user = {
        id: 123,
        name:'chango'
    }

    res.write (JSON.stringify(user));
    res.end();  


}).listen(3000);

