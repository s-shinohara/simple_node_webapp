//httpモジュールをインポート
var http = require('http');

var port = process.env.PORT || 8080;

//Webサーバーの設定
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World篠原のでjs\n');
}).listen(port);

console.log('Server running at http://localhost:3000/');
