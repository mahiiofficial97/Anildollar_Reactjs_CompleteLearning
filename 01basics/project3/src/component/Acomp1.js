import React from "react";

//import area

//function defination area
function Acomp1(props) {
  let name = "ramesh";

  return (
    <>
      <span>
        <h1>
          Hello {name} {props.surname} How are you
        </h1>
      </span>
    </>
  );
}

//export area

export default Acomp1;
