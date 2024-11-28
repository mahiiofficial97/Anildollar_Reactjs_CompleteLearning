import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//you can define react componet in 2 techniqu
//functinal component

function A(x) {
  //we will receive a formal aurgument
  let a = "mahesh";
  const surname2 = "patilrao";
  return (
    <h1>
      A {a}={x.surname}
      <B surname={surname2} />
    </h1>
  );
}
//class component
class B extends Component {
  //properties/variable
  name = "pushpendra";

  //constructor

  //method
  render() {
    //in order to acces any number od the class you have to use this.name
    return (
      <h1>
        Bcomponent={this.name}=,
        {this.props.surname}.<C surname="karandeyyy">Hello from child!</C>
      </h1>
    );
  }
}

//es6 2015 fat arrow function

let C = (props) => {
  let name = "vishnu";
  console.log("plasecheck props", props);
  return (
    <span>
      C component={name} {props.children},{props.surname}
    </span>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

let sn = "hande";
root.render(<A surname={sn} />);
