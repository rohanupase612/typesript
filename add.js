// let a : number | string = 20;
// a= "Harsh"
// let a: string = "200"
// let b: number = <number><any>a
var a = 0;
var r = "";
// if(a>0){
//     r= "Positive" 
// }
// else{
//     r = "Not Positive"
// }
r = (a > 0) ? "positive" : (a < 0) ? "Not Positive" : "Neutral";
console.log(r);
