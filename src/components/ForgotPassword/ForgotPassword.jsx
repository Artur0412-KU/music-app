import React from 'react';
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

export default function ForgotPassword() {
    const navigate = useNavigate();

  return (
    <Formik 
    initialValues = {{
        email: '',
      }}
      validationSchema = {Yup.object({
        email: Yup.string()
          .required("Email required")
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
          Reset password
        </Heading>
        <TextField name = "email" label="Email" placeholder = "Enter email" autoComplete = "off"/>

        <ButtonGroup className='pt-6'>
          <Button bg="blue.500" type='submit' onClick={() => navigate('/new-password')}>Reset</Button>
        </ButtonGroup>
      </VStack>
      )}
     
    </Formik>
  )

}
