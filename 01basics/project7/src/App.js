import React from 'react'
import Aside from './component/layout/Aside';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Section from './component/layout/Section';
import './Style.css';

export default function App() {
  return (

  <>
 <Header/>
<main>
  
  <div className='container a_cont h-100 '>


    <div className='row h-100'>
      <Aside cls='leftaside'>Left-Aside</Aside>
    <Section></Section>
    <Aside cls='rightside'>Right-Aside</Aside>

    </div>
   

     </div>
</main>
<Footer/>  
  
  </>
    )
}
