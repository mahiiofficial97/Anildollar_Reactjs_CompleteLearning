import React from 'react'
import { BrowserRouter as Grandparent, Routes as Parent, Route as Child } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import NotFound404 from './NotFound404'

export default function App() {
  return (

    <Grandparent>
      <Parent>
        <Child path="" element={<Home />}> </Child>
        <Child path='/login' element={<Login />}> </Child>
        <Child path='/register' element={<Register />}> </Child>
        <Child path='*' element={< NotFound404 />}> </Child>

      </Parent>

    </Grandparent>

  )
}
