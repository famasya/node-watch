var fs = require('fs');
var http = require('http');
var fsmonitor = require('fsmonitor')
var io = require('socket.io');

var server = http.createServer(function(req, res){
	fs.readFile('index.html', 'utf8', function(err,data){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end(data)
	})
}).listen(3000);

io = io.listen(server);
io.sockets.on('connection', function(socket){
	fsmonitor.watch('/home/famasya/Works/nodejs/watchfile',null, function(change){
		fs.readFile('data.txt', 'utf8', function(err,data){
			//cross check
			if(change.modifiedFiles[0] == 'data.txt'){
			io.sockets.emit('ack', {message:data});
			}
		})
	})
});

console.log('listening on 3000');