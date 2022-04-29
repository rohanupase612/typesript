// let a : number | string = 20;
// a= "Harsh"
// let a: string = "200"
// let b: number = <number><any>a
let a: number = 0   ;
let r: string = "";
// if(a>0){
//     r= "Positive" 
// }
// else{
//     r = "Not Positive"
// }
r= (a>0 )?"positive":(a<0 )? "Not Positive": "Neutral";
console.log(r);
