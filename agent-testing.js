const http = require('http');
const rp = require('request-promise');

const { nrV, nrP } = require('./makeUrl');

class CustomAgent extends http.Agent {
	
	constructor(options) {
		super(options);
		const { stopCreation, stopReuse } = options;
		this.stopCreation = stopCreation;
		this.stopReuse = stopReuse;
	}

	createConnection(options, callback) {
		if (!this.stopCreation) {
			console.log(`creating socket`);
			return super.createConnection(options, callback);
		}
		callback(`"stopCreation", No socket creation possible`, null);
	}

	reuseSocket(socket, request) {
		console.log(`re-using socket`);
		if (!this.stopReuse) {
			return super.reuseSocket(socket, request);
		}
		socket.destroy();
        request.destroy(new Error(`"stopReuse" causes no re-use of sockets`));
    }
	
	socketCount() {
        return Object.entries(agent.sockets).reduce( (sum, [ ,ae] ) => sum+=ae.length, 0);
    }

    requestCount() {
        return Object.entries(agent.requests).reduce( (sum, [ ,ae] ) => sum+=ae.length, 0);
    }
}

const agent = new CustomAgent({
	keepAlive: true,
	timeout: 0,
	maxSockets: 1,
	maxFreeSockets: 1
});


function createRequestFor(nr, fn) {
	const ro = fn(nr);
	ro.agent = agent;
	const clientR = http.request(
		ro,
		incMsg => {
            let totalCount = 0;
            let MBCount = 0;
			incMsg.on('error', err => {
				console.error(`Error incomming message for cr ${nr} is:${String(err)}`);
			});

			incMsg.on('end', err => {
				console.log(agent.requests);
				if (agent.socketCount() === 1 && agent.requestCount() === 0){
					console.log('I AM THE LAST ONE!')
				}
                console.log(`numbe of sockets left: ${agent.socketCount()}`);
				console.log(`[End proper][bytes:${totalCount}] incomming message for cr ${nr} is:${String(err)}`);
			});

			
            const unit = 1024**2
			incMsg.on('data', chunck => {
				totalCount += chunck.length;
				if (MBCount < Math.trunc(totalCount / unit)) {
					MBCount = Math.trunc(totalCount / unit);
					console.log(`[client][${nr}][${MBCount}MB]`);
				}
			});
		}
	);

    clientR.setHeader('Content-Size', 0);
    // this error will happen, if agent gives [No socket creation possible]
    
	clientR.on('error', err => {
		console.error(`[client][${nr}][error happened][${String(err)}]`);
    });

    // never happened so far
    clientR.on('aborted', err => {
		console.error(`[client][${nr}][aborted happened][${String(err)}]`);
    });
    clientR.on('close', err => {
		console.error(`[client][${nr}][closed happened]` + err ? `[${String(err)}]`:'');
	});
	clientR.end(''); // send request
	return clientR;
}


//const cr1 = createRequestFor('293', nrV);
//agent.stopReuse = true;

//const cr2 = createRequestFor('294');

/*setTimeout(()=>{
     const cr3 = createRequestFor('295');
     const cr4 = createRequestFor('296');
},5000);*/// proxy contest
const options = {
  host: '127.0.0.1',
  port: 9090,
  path: "http://www.google.com",
  headers: {
    Host: "www.google.com"
  }
};

http.get(options, function(res) {
  console.log(res.headers);
  res.on('error', err => console.log(`Error happened ${String(err)}`))
  res.pipe(process.stdout);
});



// 
// https://stackoverflow.com/questions/3862813/how-can-i-use-an-http-proxy-with-node-js-http-client
//
// https://raw.githubusercontent.com/request/tunnel-agent/master/index.js



