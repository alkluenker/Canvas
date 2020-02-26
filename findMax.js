var arr = [2, 4, 10, 7, 3, 9];

var highest = Math.max.apply(Math, arr);

console.log(highest);

var ind = arr.indexOf(highest);

console.log(ind);