const http = require('http');
const fetch = require('node-fetch');
const xpath = require('xpath');
const tidy = require('htmltidy').tidy;
const dom = require('xmldom').DOMParser;
/**
 * 
 * form : {
   action:"/cgi-bin/sblogin/login.cgi",
   method: "POST",
   name: "login",
}
 onsubmit saveForm(this) id = "login"

input elements:

name="screenres"
type="hidden"
value="1920x1080"

name=goodpage
type=hidden
value=/members/

name=uname
type=TEXT

name=pword
type=password

name=turing
type=TEXT

getElementById
<img name="turingimage" id="turingimage" src="/cgi-bin/sblogin/turingimage.cgi?125335">

name=savepassword
type=checkbox
checked


name=Submit1
type=Submit
value="Login"



 * 
 */
/* about chunk transfer encoding 
  https://en.wikipedia.org/wiki/Chunked_transfer_encoding

*/
//bootstrap http://dl-models.com/members/

//request login http://dl-models.com/sblogin/login.shtml/members/
// if your form looks like this
/*
<form name="inputform" action="somewhere" method="post">
    <input type="hidden" value="person" name="user">
    <input type="hidden" value="password" name="pwd">
    <input type="hidden" value="place" name="organization">
    <input type="hidden" value="key" name="requiredkey">
</form>
*/
/*
const xhr = new XMLHttpRequest();
xhr.open('POST', 'somewhere', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send('user=person&pwd=password&organization=place&requiredkey=key');
*/

const agent = new http.Agent({ keepAlive: true });

function nodef() {
	fetch('http://dl-models.com/members')
		.then(res => {
			console.log('headers', res.headers);
			return res.text();
		})
		.then(body => console.log(body));
}

function init() {
	const { protocol, hostname, pathname, search } = new URL(
		'http://dl-models.com/members/m-series.php?site=DLM&k=AGNESSA&s=01'
    );
    
    console.error({protocol, hostname,pathname, search})

	const headers = {
		'Accept-Encoding': 'deflate',
		'Transfer-Encoding': 'chunked',
		Connection: 'keep-alive',
        'Cache-Control': 'max-age=0',
        DNT: 1,

		'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36`,
		//Cookie: 'sbpasswd=CzZfG2y3uU; savepassword=1; sbuser=Mq5wteumTn; sbsession=sb6e0nkr59o&sbuser=Mq5wteumTn'
		Cookie: 'sbpasswd=CzZfG2y3uU; savepassword=1; sbuser=Mq5wteumTn; sbsession=sbh0ue4nowk&sbuser=Mq5wteumTn',
		Referer: 'http://dl-models.com/members/m-info.php?site=DLM&k=AGNESSA'
	};

	const options = {
		agent,
		port: 80,
		protocol, // default 'http:'
		hostname,
		path: `${pathname}/${search}`,
		headers
	};

	const clientReq = http.request(options, async incMsg => {
		const { data } = await bleadReadableStream(incMsg);
		console.error(incMsg.headers);
		console.error(incMsg.statusMessage);
		console.error(incMsg.statusCode);
		const doc2 = new dom().parseFromString(data.toString());
		console.log(doc2.toString());
		const results = xpath.evaluate(
			'//a', // xpathExpression
			doc2, // contextNode
			null, // namespaceResolver
			xpath.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, // resultType
			null // result
		);
		console.error(Object.getOwnPropertyNames(results));
		console.error(results.snapshotLength);
		console.error(results.nodes.map(node => node.toString()).join('\n'));
		var nsAttr = results.nodes[1].getAttribute('src');
		console.error(nsAttr);

		/*tidy(
			data.toString(),
			{
				'output-xhtml': true
			},
			(err, html) => {
				console.error('error:', err);
                console.log(html);
                const doc = parseFromString(html);
                console.log(doc);
			}
        );*/
		//const doc = new DOMParser().parseFromString(data.toString());
	});
	clientReq.on('error', err => console.log(err));

	clientReq.end('');

	function bleadReadableStream(is) {
		const chunks = [];
		return new Promise((resolve, reject) => {
			is.on('error', err => reject({ error: err }));
			is.on('close', () => resolve({ data: Buffer.concat(chunks) }));
			is.on('aborted', () => reject({ error: 'aborted' }));
			is.on('end', () => resolve({ data: Buffer.concat(chunks) }));
			is.on('data', chunk => chunks.push(chunk));
		});
	}
}

init();
