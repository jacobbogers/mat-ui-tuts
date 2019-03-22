const http = require('http');

function bleedIncommingMessage (incMsg, encoding) {
	return new Promise((resolve, reject) => {
		const data = [];
		incMsg.setEncoding(encoding || 'utf8');
		incMsg.on('data', chunk => {
			data.push(chunk);
		});
		incMsg.on('end', () => resolve(data.join('')));
		incMsg.on('error', err => {
			reject(String(err));
		});
	});
}

const server = http.createServer( async (incMsg, servResp) => {
	const url = incMsg.url;
	const rawHeaders = incMsg.rawHeaders;
	const method = incMsg.method;

	console.log({ method, url, rawHeaders });
    const message = await bleedIncommingMessage(incMsg, 'utf8');
	servResp.writeHead(200, {
		'Content-Length': 0,
		'Content-Type': 'text/plain'
	});
    servResp.end();
    console.log('message received [', message,']')
});

const port = 8082
server.listen(port, ()=>{
    console.log(`listening on: ${port}`);
});
