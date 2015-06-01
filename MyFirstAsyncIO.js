var fs = require('fs');
var filePath = process.argv[2]
var file = fs.readFile(filePath, function(err, data) {
	var numLineBreaks = data.toString().split("\n").length - 1;
	console.log(numLineBreaks);
});

