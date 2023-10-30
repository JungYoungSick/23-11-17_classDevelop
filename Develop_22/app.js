const http = require('http');

class SimpleServer {
  constructor(port) {
    this.port = port;
  }
  start() {
    const server =http.createServer((req,res)=>{
      res.writeHead(200, {'Content-Type' : 'text/plain'});
      res.end('생성자 함수로 가동된 서버입니다.')
    });
    server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
}

const simpleApp =new SimpleServer(3000);
simpleApp.start();

const portRange = {
  min:3001,
  max:3005,
}

for(let i = portRange.min; i<portRange.max; i++) {
  const app = new SimpleServer(i);
  app.start()
}