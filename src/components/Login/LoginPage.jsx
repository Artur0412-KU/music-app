import React, { useState } from 'react';
import { VStack, ButtonGroup, Button, FormControl, FormLabel, FormErrorMessage, Input, Heading, Link } from "@chakra-ui/react";
import { Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useNavigate } from "react-router-dom";
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import {
  InputGroup,
  InputRightElement,
  Icon,
  useColorMode
} from '@chakra-ui/core';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {colorMode} = useColorMode();
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <Formik 
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(4, "Username too short!")
          .max(50, 'Username too long!'),
        password: Yup.string()
          .required("Password required")
          .min(4, "Password too short!")
          .max(50, 'Password too long!'),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack 
          as={Form}
          className='w-90 md:w-500 m-auto justify-center h-screen space-y-4'
          onSubmit={formik.handleSubmit}
        >
          <Heading>
            Log In
          </Heading>
          <TextField name="username" label="Username" placeholder="Enter username" autoComplete="off"/>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
              name="password"
              type={showPassword ? "text" : "password"} // Check if type updates correctly
              placeholder="Enter password"
              autoComplete="off"
              />
              <Button size="sm" onClick={handleTogglePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button> 
            </InputGroup>
            <Link>Forgot your password?</Link>
            

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <ButtonGroup className='pt-6'>
            <Button bg="blue.500" type='submit' color='white'>Sign In</Button>
            <Button onClick={() => navigate('/register')}>Sign Up</Button>
          </ButtonGroup>
        </VStack>
      )}
    </Formik>
  );
}

