import React, { useState } from 'react';
import { VStack, ButtonGroup, Button, FormControl, FormLabel, FormErrorMessage, Input, Heading, Link } from "@chakra-ui/react";
import { Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextField from '../Login/TextField';
import { useNavigate } from "react-router-dom";
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import {
  InputGroup
} from '@chakra-ui/core';

export default function NewPassword() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };
  return (
    <Formik 
      initialValues={{
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
          .max(50, 'Password too long!')
    })}
      onSubmit={(values, actions) => {
        const vals = {...values}
        actions.resetForm();
        fetch("http://localhost:1488/auth/new-password", {
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
          onSubmit={formik.handleSubmit}
        >
          <Heading>
            Create a new password
          </Heading>
          <FormControl isInvalid = {formik.errors.password && formik.touched.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
              name="password"
              type={showPassword ? "text" : "password"} // Check if type updates correctly
              placeholder="Enter a new password"
              autoComplete="off"
              />
              <Button size="sm" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button> 
            </InputGroup>
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            
          </FormControl>
          <FormControl isInvalid = {formik.errors.password && formik.touched.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
              name="password"
              type={showPassword ? "text" : "password"} // Check if type updates correctly
              placeholder="Enter a new password again"
              autoComplete="off"
              />
              <Button size="sm" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button> 
            </InputGroup>

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <ButtonGroup className='pt-6'>
            <Button bg="blue.500" type='submit' color='white' onClick={() => navigate('/register')}>Sign In</Button>
          </ButtonGroup>
        </VStack>
      )}
    </Formik>
  )
}
