var fs = require('fs');
var http = require('http');
var watch = require('watch')
var io = require('socket.io');

var server = http.createServer(function(req, res){
	fs.readFile('index.html', 'utf8', function(err,data){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end(data)
	})
}).listen(3000);

io = io.listen(server);
io.sockets.on('connection', function(socket){
	watch.createMonitor('/home/famasya/Works/nodejs/watchfile', function (monitor) {
		monitor.files['/home/famasya/Works/nodejs/watchfile/data.txt'] 
		monitor.on("changed", function (f, curr, prev) {
			console.log("changed");
			fs.readFile('data.txt','utf8', function(error, data){
				io.sockets.emit('ack',{message:data});
			})
		})
	})
});

console.log('listening on 3000');