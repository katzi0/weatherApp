var express = require('express');
app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/' ,function(req,res){
	res.send('hello world');
})

app.get('/yo' ,function(req,res){
	res.send('hello /yo');
})







var server = app.listen(3000,function(){
console.log('server listen'+server.address() +" "+server.address().port)});