class Parent {
  protected p : number = 1
   showp(){
          console.log("p ="+ this.p)
   }
   
}
class Child extends Parent{
   c: number = 2
   showc(){
      this.p =20      
      console.log("c ="+this.c);
   }
}
let c = new Child();
// c.p =20;
c.showp();
c.showc();

