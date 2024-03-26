import React, { useState } from 'react'
import { VStack, 
  ButtonGroup, Button, FormControl, FormLabel, 
  FormErrorMessage, Input, Heading,  } from "@chakra-ui/react"
import { Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import PasswordField from './inputs/PasswordField';
import SelectGenderInput from './inputs/SelectGenderInput';
import SelectCountryInput from './inputs/SelectCountryInput';

export default function ContinueRegistration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <Formik 
    initialValues = {{
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema = {Yup.object({
        newPassword: Yup.string()
          .required("Password required")
          .min(4, "Password too short!")
          .max(50, 'Password too long!'),
        confirmPassword: Yup.string()
          .required("Password required")
          .min(4, "Password too short!")
          .max(50, 'Password too long!'),
    })}
    onSubmit = {(values, actions) => {
      const vals = {...values}
        actions.resetForm();
        fetch("http://localhost:1488/auth/register", {
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

        <SelectGenderInput name="gender" label="Gender" />
        <SelectCountryInput name="country" label="Country" />
        <PasswordField name = "newPassword" label="Create a new password" placeholder="Password" autoComplete="off"/> 
        <PasswordField name = "confirmPassword" label="Enter a password again" placeholder="Password" autoComplete="off"/> 

        <ButtonGroup className='pt-6'>
          <Button bg="blue.500" type='submit' color='white'onClick={() => navigate('/regsiter/2')}>Continue</Button>
          <Button onClick={() => navigate('/')}>Sign In</Button>
        </ButtonGroup>
      </VStack>
      )}

    </Formik>
  )
}
