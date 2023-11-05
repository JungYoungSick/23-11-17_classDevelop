const http = require("http")

const server = http.createServer(function (require, response) {
  console.log(require.url);

  function docMaker(title, href, test) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  <a href="${href}">${test}</a>
</body>
</html>
`;
  }
  if (require.url === "/") {
    let doc = docMaker("메인페이지", "/sub", "서브페이지로 이동!");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(doc);
  }
  if (require.url === "/sub") {
    let doc = docMaker("서브페이지", "/sub", "메인페이지로 이동!");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(doc);
  }
})

server.listen(8080);