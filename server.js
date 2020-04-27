const os = require('os');

const http = require('http')
const handleRequest = (req, res) => {
	res.writeHead(200);
	res.end("Hello World! I'm " + os.hostname());

	console.log("[" + Date(Date.now()).toLocaleString()
	+"]" + os.hostname())
}

const www = http.createServer(handleRequest);
www.listen(8080)


