import React from 'react';
import ReactDOM from 'react-dom/client';

// Every component has its own data and state
class A extends React.Component {
  // Constructor
  constructor() {
    super();

    //sate is a js object of the class which can hold the some dta
    this.state = {
       name: "Mahesh",
      surname: "Hande",
      address: "Pune Kharadi" };

      // this.setState({
      //   ...this.setState,//yhis is spread operator 
      //   name:"Suryabhaaan"
      // });

  }

 


  // Methods
  render() {
//reneder method  is the updating state 
   
   


    return (
      <div>
       <>
       <h1>
          Welcome {this.state.name} {this.state.surname} from {this.state.address}
        </h1>
        <h1>welcome {this.props.name +" "}{this.props.surname+" "}{this.props.children}</h1>
       
       </>

      </div>
    );
  }
}

// Root Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="ganesh" surname="shinde"> Keshavnagar Pune</A>);
