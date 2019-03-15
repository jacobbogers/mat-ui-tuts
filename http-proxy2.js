const http = require('http');
const httpProxy = require('http-proxy');
//Create a proxy instance
var proxy = httpProxy.createProxy();

proxy.on("error", function(e){
   //handling error
});
http.createServer(function(req, res){
   if(hasMatch(req.headers.host)){
      var url = 'http://localhost' + targetPort(req.headers.host);
      return proxy.web(req, res, {target: url});
   }
   res.writeHead(500, {'Content-Type': 'text/plain'});
   res.end('Requested resource is not available');
}).listen(80);