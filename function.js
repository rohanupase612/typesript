// let no : number = 5;
var sum = 0;
function prime(no) {
    for (var i = 2; i <= no; i++) {
        if (no % i == 0) {
            sum = sum + 1;
            // console.log(i)
        }
        if (sum == 2) {
            console.log("no is prime");
            break;
        }
        else {
            console.log("no is not prime");
            return;
        }
    }
}
prime(7);
