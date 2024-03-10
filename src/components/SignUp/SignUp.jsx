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
    })}
    onSubmit = {(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
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
        <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
              name="password"
              type={showPassword ? "text" : "password"} // Check if type updates correctly
              placeholder="Create password"
              autoComplete="off"
              />
              <Button size="sm" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button> 
            </InputGroup>
            

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel color='primary'>Phone number</FormLabel>
            <InputGroup>
              <Input
              type='tel'
              placeholder="Phone number"
              autoComplete="off"
              /> 
            </InputGroup>
            

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>

        <ButtonGroup className='pt-6'>
          <Button bg="blue.500" type='submit'>Sign Up</Button>
          <Button onClick={() => navigate('/')}>Sign In</Button>
        </ButtonGroup>
      </VStack>
      )}
     
    </Formik>
  )
}
