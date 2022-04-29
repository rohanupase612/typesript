var y = 35;
var s = "";
s = (y % 5 == 0 && y % 7 == 0) ? "no is divisible by both" : (y % 7 == 0) ? "No is divisible by 7" : (y % 5 == 0) ? "No is divisible by 5" : "not divisible";
console.log(s);
