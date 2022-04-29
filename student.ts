class Student{
    rollno : number = 0;
    name : string = "";

    constructor(rno: number,nm:string){
          this.name = nm;
          this.rollno= rno;
    }
    display=()=>{
              console.log("rollno= "+ this.rollno);
              console.log("name= "+ this.name);
              
    }
}
let s= new Student(1,"Harsh");
// s.get(1,"Harsh");
s.display();
let s1= new Student(2,"Nilesh");
s1.display();