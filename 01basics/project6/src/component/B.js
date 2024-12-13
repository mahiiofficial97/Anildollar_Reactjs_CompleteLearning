//import area

import React,{ Component } from "react"
import C from "./C"


//defination area

export class B extends Component 
{
  //properties

  //constriuctorr
  constructor()
  {
    super()
  }

  //method

  //everey class component must have render method
  render()
  {
   return <div>

      mahesh hande ji {this.props.data3}
      <C data4={this.props.data3}></C>
    </div>
  }
}