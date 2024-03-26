import React from 'react';
import { VStack, ButtonGroup, Button, FormControl, FormLabel, FormErrorMessage, Input, Heading, Link } from "@chakra-ui/react";
import { Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useNavigate } from "react-router-dom";


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
      onSubmit={(values, actions) => {
        const vals = {...values}
        actions.resetForm();
        fetch("http://localhost:1488/auth/forgot-password", {
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
          Reset password
        </Heading>
        <TextField name = "email" label="Email" placeholder = "Enter email" autoComplete = "off"/>

        <ButtonGroup className='pt-6'>
          <Button bg="blue.500" type='submit' onClick={() => navigate('/new-password')} color='white'>Reset</Button>
        </ButtonGroup>
      </VStack>
      )}
     
    </Formik>
  )

}
