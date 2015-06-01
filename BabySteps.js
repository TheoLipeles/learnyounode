var numbers = process.argv;
var total = 0;
numbers.slice(2).forEach(function(number) {
	total += Number(number);
});

console.log(total);