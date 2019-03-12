var http = require('http');

http.createServer( (incMsgO, serverResponse) => {
  
  const options = {
      port: 80,
      host: incMsgO.headers['host'],
      method: incMsgO.method,
      path: incMsgO.url,
      headers: incMsgO.headers
  };
    //var proxy = http.createClient(80, request.headers['host'])

  const forwardingRequest = http.request(options,  incMsg  => {

    //write headers and status code
    serverResponse.writeHead(incMsg.statusCode, incMsg.headers);
    incMsg.pipe(serverResponse);
    incMsg.pause();
    incMsg.on('end', 'response via proxy forwarded to requestor');
  });

  incMsgO.pipe(forwardingRequest);
  incMsgO.on('end', ()=>{
      console.log('incomming message forwarded via proxy')
  })


}).listen(9090, function() {
    const { address, port, family }  = this.address();
    console.log(`proxy listening on host/port ${family}/${address}/${port}`);
});