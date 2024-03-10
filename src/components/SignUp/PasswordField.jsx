import {
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/core";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import {
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';
import { useState } from "react";

export default function PasswordField({label, ...props}) {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <FormControl isInvalid={meta.touched && meta.error}>
        <FormLabel>{label}</FormLabel>
        <Input as={Field} type={showPassword ? 'text' : 'password'} {...field} {...props} />
        <InputRightElement>
          <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
}
