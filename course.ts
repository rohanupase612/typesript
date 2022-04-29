class Student{
    rollno: number = 0;
    name : string = "";
    tdate: Date;

    constructor(rno: number, nm: string, dt: Date){
        this.name = nm;
        this.rollno= rno;
        this.tdate = dt;
    
    
    }
    display=(todate:Date)=>{
        console.log("rollno= "+ this.rollno);
        console.log("name= "+ this.name);
        console.log("admission Date = "+ this.tdate);

        var diff = Math.abs(this.tdate.getTime() - todate.getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
        var per = (diffDays/ 180)*100;
        console.log("Course completed: "+ per+"%");
}
}
let date = new Date(2022, 0, 1);
let s= new Student(1,"harsh",date);

 date = new Date(2022, 0, 15);
s.display(date);
