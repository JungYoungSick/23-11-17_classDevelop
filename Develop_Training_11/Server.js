const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  function serverErrerLog() {
    res.writeHead(500)
    res.end("서버가 안돼요! 수정하세요");
  }

  console.log(req.url ,req.method);
  if(req.url === '/' && req.method === 'GET') {
    fs.readFile('app_T_11_1.html','utf8',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200,{'content-type':'text/html'});
      res.end(data);
    });
  }else if(req.url ==='app-T_11_1.CSS' && req.method === 'GET') {
    fs.readFile('app-t_11_1.CSS','utf8',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(205, {'content-type':'text/css'});
      res.end(data)
    })
  }
})
const port = 3000;
server.listen(port, () => {});
