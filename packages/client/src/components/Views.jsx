import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage'
import SignUp from './SignUp/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import NewPassword from './NewPassword/NewPassword'
import ContinueRegistration from './SignUp/ContinueRegistration'


export default function Views() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}></Route>
        <Route path = "/register" element = {<SignUp/>}></Route>
        <Route path = "/forgot-password" element = {<ForgotPassword/>}></Route>
        <Route path = "/new-password" element = {<NewPassword/>}></Route>
        <Route path = "/register/2" element = {<ContinueRegistration/>}></Route>
      </Routes>
    </div>
  )
}
