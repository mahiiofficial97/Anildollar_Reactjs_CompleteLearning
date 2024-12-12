class A {
  //properties
state;
  name; //this is only declaration
  name='';//this is declartion and initialization
  name='mahhii'; //this is declartion and initialization

  //constreuctor
setState(data)
{
this.state=data;
}

showState()
{
  console.log(this.state)
}

  constructor()
  {
    //the main role of the constriuctor s the initialize the properties 
    //this.member
    this.name;
    this.surname="hande";
    this.fathername='bhagvan';
  }

  //methods
  showname()
  {
    console.log(this.name +"  " +   this.surname); //this is internal aobject 
  }

}
// let obj=new A(); 
// obj.showname(); //dot is yhe member selelction operator


class B extends A{
//propertes

friend1;
friend2='';




//construcotr

constructor(friend4)
{
  super();
  this.friend1="mahesh"
  this.friend2="ganesh"
  this.friend3="rakesh"
  this.friend4=friend4;
}


//methods
listmyfirnds()
{
  console.log(this.friend1)
  console.log(this.friend2)

  console.log(this.friend3)

  console.log(this.friend4)

}


}
let obh=new B("sanket");
obh.showname()

obh.listmyfirnds()
obh.setState({
  name:"mahesh",
  surname:"hande",
  city:"pune"
})
obh.showState()
