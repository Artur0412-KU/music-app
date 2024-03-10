import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage'
import SignUp from './SignUp/SignUp'

export default function Views() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}></Route>
        <Route path = "/register" element = {<SignUp/>}></Route>
      </Routes>
    </div>
  )
}
