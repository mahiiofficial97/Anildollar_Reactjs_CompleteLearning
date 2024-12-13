//import Area

import { B } from "./B"


//defination are
let A= props  =>
{
  console.log(props)

  return <>
  <div>parents {props.name} 
   <div>Child {props.surname} </div>
   </div>
<B data3={props.name}></B>

</>
   
}
//export area
export default A