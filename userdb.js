const { resolve, join } = require('path');
const fs = require('fs');
const http = require('https');
const { parse: parseURL } = require('url');

const db = './users-db';
const configfile = require('./randomusers.json');

function parallelWait(promises) {
	return new Promise(resolve => {
		const results = { resolved: [], rejected: [] };
		const { resolved, rejected } = results;

		if (promises.length === 0) {
			return resolve({ resolved: ['nothing to send to'], rejected: [] });
		}

		function resolverResult(data) {
			resolved[resolved.length] = data;
			if (resolved.length + rejected.length >= promises.length) {
				resolve(results);
			}
		}

		function rejectedResult(data) {
			rejected[rejected.length] = data;
			if (resolved.length + rejected.length >= promises.length) {
				resolve(results);
			}
		}

		for (const promise of promises) {
			promise.then(resolverResult).catch(rejectedResult);
		}
	});
}

function reCreateDBDirectory() {
	const full = resolve(db);
	console.log(`remove directory ${full}`);
	try {
		fs.rmdirSync(full);
	} catch (err) {
		if (err.code === 'ENOTEMPTY') {
			console.error(`no enotempty`);
			return false;
		} else {
			console.error(`error on removal directory ${err.message}`);
		}
	}
	try {
		fs.mkdirSync(full);
	} catch (err) {
		console.error(`error on creation directory ${err.message}`);
		return false;
	}
	return true;
}

async function fetchAndStore(file, url) {
	const { hostname, path } = parseURL(url);
	return new Promise((resolve, reject) => {
		//
		const clientReq = http.request({ hostname, path }, readable => {
			const writable = fs.createWriteStream(file);
            //
            readable.on('close', () => {
                console.log(`close received on ${url}`);
            });
            readable.on('error', () => {
                console.log(`error received on ${url}`);
            });
            readable.on('end', () => {
                resolve(`saved ${file},${writable},${readable},${url}`)
                
            });
            readable.pipe(writable);

		});
		clientReq.on('error', err => {
			console.error(`problem with request: ${err.message}`);
			reject(err);
		});
        clientReq.write('');
		clientReq.end(); // fire
	});
}

async function createUserBD() {
	const { results: resultsRaw } = configfile;
	const peopleTofetch = flatten(
		resultsRaw.map(({ login: { uuid }, picture }) =>
			Object.entries(picture).map(e => ({ img: `${uuid}-${e[0]}.jpg`, url: e[1]}))
		)
	);

	const popper = popArray(peopleTofetch);
	const popGroup5 = groupBy(50)(popper);
    let batch
	while ( batch = popGroup5() , batch.length ) {
		
        if (batch.length === 0) break;
        const requests = batch.map(({ img, url }) => fetchAndStore(join(db, img), url));
		console.log(await parallelWait(requests));
	}
}

function popArray(arr) {
	let i = 0;
	return function() {
		if (i < arr.length) return arr[i++];
		return undefined;
	};
}

function groupBy(n) {
	return function grouperFn(fn) {
		return function pop() {
			const rc = [];
			do {
				const data = fn();
				if (data === undefined) break;
				rc.push(data);
			} while (rc.length < n);
			return rc;
		};
	};
}

const flatten = arr => {
	let i = 0;
	while (i < arr.length) {
		if (Array.isArray(arr[i])) {
			arr.splice(i, 1, ...arr[i]);
		} else {
			i++;
		}
	}
	return arr;
};

reCreateDBDirectory();
createUserBD();
