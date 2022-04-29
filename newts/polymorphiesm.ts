class Addition{
    add(no1: number, no2: number): number{
              console.log("parent");
              
          return no1+no2 ;
    }
}
class Trial extends Addition{
          add(no1: number, no2: number): number{
                    console.log("child");

                    return no1+no2 ;
              }
}
  let t= new Trial; 
  t= new Addition();
  console.log(t.add(10, 20));