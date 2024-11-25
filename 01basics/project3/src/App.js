import logo from "./logo.svg";
import "./App.css";
//impor area
//import {somelocation} from somlocatiom
//import somedefault from loactio

import Acomp1 from "./component/Acomp1";
import { Bcomp } from "./component/Bcomp";

//functional defination are
function App() {
  return (
    <>
      <Acomp1 surname="Hande Only" />
      <Acomp1 surname="patil" />
      <Bcomp />
    </>
  );
}

export default App;
