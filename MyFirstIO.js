var fs = require('fs');
var filePath = process.argv[2]
var file = fs.readFileSync(filePath).toString();

var numLineBreaks = file.split("\n").length - 1;
console.log(numLineBreaks);
