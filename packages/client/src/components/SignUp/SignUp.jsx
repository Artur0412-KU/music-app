import React, { useState } from 'react'
import { VStack, 
  ButtonGroup, Button, FormControl, FormLabel, 
  FormErrorMessage, Input, Heading,  } from "@chakra-ui/react"
import { Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import TextField from '../Login/TextField';
import { useNavigate } from "react-router-dom";
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import {
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';
import PasswordField from './PasswordField';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <Formik 
    initialValues = {{
        username: '',
        password: '',
        
      }}
      validationSchema = {Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(4, "Username too short!")
          .max(50, 'Username too long!'),
        password: Yup.string()
          .required("Password required")
          .min(4, "Password too short!")
          .max(50, 'Password too long!'),
        phoneNumber: Yup.string()
          .required('Phone number required')
    })}
    onSubmit = {(values, actions) => {
      const vals = {...values}
        actions.resetForm();
        fetch("http://localhost:1488/auth/registration", {
          method: 'POST',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(vals)
        }).catch(err => {
          return
        }).then(res => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          return res.json();
        })
        .then(data => {
          if(!data) {
            return;
          }
          console.log(data)
        })
    }}
    >
      {(formik) => (
      <VStack 
        as={Form}
        className='w-90 md:w-500 m-auto justify-center h-screen space-y-4'
        onSubmit={formik.handleSubmit}>
        <Heading>
          Welcome
        </Heading>
        <TextField name = "username" label="Username" placeholder = "Create username" autoComplete = "off"/>
        <PasswordField name = "password" label="Password" placeholder="Enter password" autoComplete="off"/>
        <TextField name = "phoneNumber" label="Phone number" placeholder = "Phone number" autoComplete = "off"/>

        <ButtonGroup className='pt-6'>
          <Button bg="blue.500" type='submit'>Sign Up</Button>
          <Button onClick={() => navigate('/')}>Sign In</Button>
        </ButtonGroup>
      </VStack>
      )}
     
    </Formik>
  )
}
