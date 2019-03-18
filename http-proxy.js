var http = require('http');
const url = require('url');

http.createServer( (incMsgO, serverResponse) => {
  
  const { pathname } = url.parse(incMsgO.url);
 
  const options = {
      port: 80,
      host: incMsgO.headers['host'],
      method: incMsgO.method,
      path: pathname,
      headers: incMsgO.headers
  };

  console.log(options);
    //var proxy = http.createClient(80, request.headers['host'])

  const forwardingRequest = http.request(options,  incMsg  => {
    console.log('answer received after forwarding');
    //write headers and status code
    serverResponse.writeHead(incMsg.statusCode, incMsg.headers);
    //incMsg.on('end', 'response via proxy forwarded to requestor');
    incMsg.pipe(serverResponse);
    //incMsg.pause();
    
  });

  incMsgO.pipe(forwardingRequest);
  incMsgO.on('end', ()=>{
      console.log('incomming message forwarded via proxy')
  })



}).listen(9090, function() {
    const { address, port, family }  = this.address();
    console.log(`proxy listening on host/port ${family}/${address}/${port}`);
});