var express = require('express');
var app = express();

app.use(express.static('build'))
/**
* get： 请求
* url： http://127.0.0.1:8088/getData
*/
app.get('/getData',function(req,res){
	  var resData = {
			err:0,
			data:dataJson
		}
		res.end(JSON.stringify(resData));
})
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/build/index.html')
})
var server = app.listen(8088, function () {
	console.log('正常打开8088端口');
})
