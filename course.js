var Student = /** @class */ (function () {
    function Student(rno, nm, dt) {
        var _this = this;
        this.rollno = 0;
        this.name = "";
        this.display = function (todate) {
            console.log("rollno= " + _this.rollno);
            console.log("name= " + _this.name);
            console.log("admission Date = " + _this.tdate);
            var diff = Math.abs(_this.tdate.getTime() - todate.getTime());
            var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            var per = (diffDays / 180) * 100;
            console.log("Course completed: " + per + "%");
        };
        this.name = nm;
        this.rollno = rno;
        this.tdate = dt;
    }
    return Student;
}());
var date = new Date(2022, 0, 1);
var s = new Student(1, "harsh", date);
date = new Date(2022, 0, 15);
s.display(date);
