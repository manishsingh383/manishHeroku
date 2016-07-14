var express = require("express"),
    app =express();
	app.use('/', express.static(__dirname + '/'));
var server = require("http").createServer(app);
    server.listen(5010);

    app.get("/",function(req , res){
    	res.sendfile('inbox.html');
    });
    console.log('server started.....5010');
