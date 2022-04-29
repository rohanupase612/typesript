var Student = /** @class */ (function () {
    function Student(rno, nm) {
        var _this = this;
        this.rollno = 0;
        this.name = "";
        this.display = function () {
            console.log("rollno= " + _this.rollno);
            console.log("name= " + _this.name);
        };
        this.name = nm;
        this.rollno = rno;
    }
    return Student;
}());
var s = new Student(1, "Harsh");
// s.get(1,"Harsh");
s.display();
var s1 = new Student(2, "Nilesh");
s1.display();
