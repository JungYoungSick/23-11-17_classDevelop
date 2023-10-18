const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  function serverErrerLog() {
    res.writeHead(500)
    res.end("서버가 안돼요! 수정하세요");
  }

  console.log(req.url ,req.method);
  if(req.url === '/' && req.method === 'GET') {
    fs.readFile('./Develop_Training_11/app_T_11_1.html','utf-8',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  }else if(req.url ==='app-T_11_1.CSS' && req.method === 'GET') {
    fs.readFile('./Develop_Training_11/app-T_11_1.CSS','utf-8',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/css'});
      res.end(data)
    })
  }
})
const port = 8080;
server.listen(port, () => {});

