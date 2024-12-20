import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import Section from './Section'

export default function Layout(props) {
  return (
    
    <>
 <Header/>
<main>
  
  <div className='container a_cont h-100 '>


    <div className='row h-100'>
      <Aside cls='leftaside'>Left-Aside</Aside>
      
             {props.children}

   <Aside cls='rightside'>Right-Aside</Aside>

    </div>
   

     </div>
</main>
<Footer/>  
  
  </>
  )
}
